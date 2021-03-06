﻿using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Dynamic;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;
using System.Text;
using WebApplication1.DomainServices.Entities;
using WebApplication1.Models;

namespace WebApplication1.DataAccess.Repository
{
    public class Repository<T> : IRepository<T> where T : EntityBase, new()
    {
        private readonly PostgreSQLConnection _postgreSQLConnection;
        private IConfiguration _configuration;
        public Repository(IConfiguration configuration)
        {
            _configuration = configuration;
            var connetion = _configuration.GetValue<string>("ConnectionStrings");
            _postgreSQLConnection = new PostgreSQLConnection(connetion);
        }

        public bool Add(T entity)
        {
            List<T> entityList = new List<T>();
            entityList.Add(entity);
            var type = entity.GetType();
            IList<PropertyInfo> props = new List<PropertyInfo>(type.GetProperties().Where(x => x.Name != "Id" && x.GetValue(entity, null) != null));
            StringBuilder sql = new StringBuilder();
            entity.DateModified = DateTime.Now;
            sql.Append("INSERT INTO " + type.Name + " (");
            sql.Append(string.Join(", ", props.Select(x => x.Name)));
            sql.Append(") VALUES (");

            var values = props.Select(x => x.GetValue(entity, null)).ToList();

            for (int i = 0; i < values.Count; i++)
            {
                var typeValue = values[i].GetType();
                var valueField = values[i];

                if (typeValue.Equals(typeof(string)))
                    sql.Append("'" + valueField + "'");
                if (typeValue.Equals(typeof(int)))
                    sql.Append(valueField);
                if (typeValue.Equals(typeof(DateTime)))
                    sql.Append("TO_TIMESTAMP('" + DateTime.Parse(valueField.ToString()) + "', 'DD/MM/YYYY HH:MI')");
                if (typeValue.Equals(typeof(Boolean)))
                    sql.Append(valueField);
                if (typeValue.Equals(typeof(float)))
                    sql.Append(valueField);
                if (typeValue.Equals(typeof(Double)))
                    sql.Append(valueField);

                if (i < values.Count - 1)
                    sql.Append(",");
            }

            sql.Append(");");
            return _postgreSQLConnection.ExecuteQuery(sql.ToString());
        }

        public T AddWithReturn(T entity)
        {
            var isSave = Add(entity);
            if (isSave)
            {
                return GetLastEntitySave(entity);
            }

            return null;
        }

        public bool Update(T entity)
        {
            StringBuilder sql = new StringBuilder();
            entity.DateModified = DateTime.Now;
            List<T> entityList = new List<T>();
            entityList.Add(entity);
            var type = entity.GetType();
            IList<PropertyInfo> props = new List<PropertyInfo>(type.GetProperties());
            entity.DateModified = DateTime.Now;
            sql.Append("UPDATE " + type.Name + " SET ");
            for (int i = 0; i < props.Count; i++)
            {
                var newValue = props[i].GetValue(entity, null);

                if (newValue == null)
                    continue;

                if (newValue.GetType().Equals(typeof(string)))
                    sql.Append(props[i].Name + " = '" + newValue + "'");
                else if (newValue.GetType().Equals(typeof(int)))
                    sql.Append(props[i].Name + " = " + newValue);
                else if (newValue.GetType().Equals(typeof(DateTime)))
                    sql.Append(props[i].Name + " = " + validateDateTime(newValue.ToString()));
                else if (newValue.GetType().Equals(typeof(Boolean)))
                    sql.Append(props[i].Name + " = " + newValue);
                else if (newValue.GetType().Equals(typeof(float)))
                    sql.Append(props[i].Name + " = " + newValue);
                else if (newValue.GetType().Equals(typeof(Double)))
                    sql.Append(props[i].Name + " = " + newValue);
                else
                    sql.Append(props[i].Name + " = " + newValue);

                if (i < props.Count - 1)
                    sql.Append(", ");
            }
            sql.Append(" WHERE Id = " + entity.Id + ";");
            return _postgreSQLConnection.ExecuteQuery(sql.ToString());
        }

        private string validateDateTime(string newValue)
        {
            if (newValue.ToString() == "1/01/0001 12:00:00 a. m.")
                return "null";
            else if (newValue != null)
                return "TO_TIMESTAMP('" + DateTime.Parse(newValue) + "', 'DD/MM/YYYY HH:MI')";
            else
                return null;
        }

        public void Remove(T entity)
        {
            StringBuilder sql = new StringBuilder();
            var type = entity.GetType();
            sql.Append("DELETE FROM " + type.Name + " WHERE Id = " + entity.Id);
            _postgreSQLConnection.ExecuteQuery(sql.ToString());
        }


        public void RemoveByWhere(T entity, string where)
        {
            StringBuilder sql = new StringBuilder();
            var type = entity.GetType();
            sql.Append("DELETE FROM " + type.Name + " WHERE " + where);
            _postgreSQLConnection.ExecuteQuery(sql.ToString());
        }

        public T GetById(int id)
        {
            StringBuilder sql = new StringBuilder();
            sql.Append("SELECT * FROM " + typeof(T).Name + " WHERE Id = " + id);
            var list = _postgreSQLConnection.ListAll2(sql.ToString());
            if (list != null)
            {
                var entity = ConvertDataTable<T>(list);
                return entity.FirstOrDefault();
            }
            return null;
        }

        public IEnumerable<T> ListAll()
        {
            List<T> listEntity = new List<T>();
            var list = _postgreSQLConnection.ListAll2("SELECT * FROM public." + typeof(T).Name);
            listEntity = ConvertDataTable<T>(list);
            return listEntity;
        }

        public IEnumerable<T> CustomList(string sql)
        {
            List<T> listEntity = new List<T>();
            var list = _postgreSQLConnection.ListAll2(sql);
            listEntity = ConvertDataTable<T>(list);
            return listEntity;
        }


        public IEnumerable<T> ListByParam(Parameters<T> parameters)
        {
            var orderByClass = ObtenerOrderBy(parameters);
            Expression<Func<T, bool>> whereTrue = x => true;
            var where = parameters.Where ?? whereTrue;
            List<T> listEntity = new List<T>();
            var list = _postgreSQLConnection.ListAll2("SELECT * FROM " + typeof(T).Name + where);
            listEntity = ConvertDataTable<T>(list);

            return listEntity;
        }

        public IEnumerable<T> ListByWhere(string sql)
        {
            List<T> listEntity = new List<T>();
            var list = _postgreSQLConnection.ListAll2($"SELECT * FROM {typeof(T).Name} WHERE {sql}");
            listEntity = ConvertDataTable<T>(list);
            return listEntity;
        }

        public T GetLastEntitySave(T entity)
        {
            StringBuilder sql = new StringBuilder();
            sql.Append("SELECT * FROM " + typeof(T).Name + " WHERE Id = (SELECT MAX(ID) FROM " + typeof(T).Name + ")");
            var list = _postgreSQLConnection.ListAll2(sql.ToString());
            if (list != null)
            {
                var lastEntity = ConvertDataTable<T>(list);
                return lastEntity.FirstOrDefault();
            }
            return null;
        }

        public bool CustomQuery(string sql)
        {
            return _postgreSQLConnection.ExecuteQuery(sql.ToString());
        }

        private OrderByClass ObtenerOrderBy(Parameters<T> parameters)
        {
            if (parameters.OrderBy == null && parameters.OrderByDescending == null)
            {
                return new OrderByClass(x => x.Id, true);
            }

            return (parameters.OrderBy != null)
                ? new OrderByClass(parameters.OrderBy, true) :
                new OrderByClass(parameters.OrderByDescending, false);
        }


        private static dynamic DictionaryToObject(IDictionary<String, Object> dictionary)
        {
            var expandoObj = new ExpandoObject();
            var expandoObjCollection = (ICollection<KeyValuePair<String, Object>>)expandoObj;

            foreach (var keyValuePair in dictionary)
            {
                expandoObjCollection.Add(keyValuePair);
            }
            dynamic eoDynamic = expandoObj;
            return eoDynamic;
        }

        private static List<T> ConvertDataTable<T>(DataTable dt)
        {
            List<T> data = new List<T>();
            foreach (DataRow row in dt.Rows)
            {
                T item = GetItem<T>(row);
                data.Add(item);
            }
            return data;
        }

        private static T GetItem<T>(DataRow dr)
        {
            Type temp = typeof(T);
            T obj = Activator.CreateInstance<T>();

            foreach (DataColumn column in dr.Table.Columns)
            {
                var pro = temp.GetProperties().First(x => x.Name.Equals(column.ColumnName, StringComparison.OrdinalIgnoreCase));
                var columnValue = dr[column.ColumnName];
                //var type = columnValue.GetType(columnValue);
                var columValdiate = (Convert.IsDBNull(columnValue)) ? null : columnValue;

                if (pro != null)
                {
                    pro.SetValue(obj, columValdiate, null);
                }
            }
            return obj;
        }


        public static T ConvertDBNull<T>(object value, Func<object, T> conversionFunction)
        {
            return conversionFunction(value == DBNull.Value ? null : value);
        }



        private class OrderByClass
        {

            public OrderByClass()
            {

            }

            public OrderByClass(Func<T, object> orderBy, bool isAscending)
            {
                OrderBy = orderBy;
                IsAscending = isAscending;
            }


            public Func<T, object> OrderBy { get; set; }
            public bool IsAscending { get; set; }
        }

    }
}
