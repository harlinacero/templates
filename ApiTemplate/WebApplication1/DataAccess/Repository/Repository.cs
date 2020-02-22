using Microsoft.Extensions.Configuration;
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
            IList<PropertyInfo> props = new List<PropertyInfo>(type.GetProperties().Where(x => x.Name != "Id"));
            StringBuilder sql = new StringBuilder();
            entity.DateModified = DateTime.Now;
            sql.Append("INSERT INTO public." + type.Name + " (");
            sql.Append(string.Join(", ", props.Select(x => x.Name)));
            sql.Append(") VALUES (");

            var values = props.Select(x => x.GetValue(entity, null)).ToList();

            for (int i = 0; i < values.Count; i++)
            {
                if (values[i].GetType().Equals(typeof(string)))
                    sql.Append("'" + values[i] + "'");
                if (values[i].GetType().Equals(typeof(int)))
                    sql.Append(values[i]);
                if (values[i].GetType().Equals(typeof(DateTime)))
                    sql.Append("TO_TIMESTAMP('" + DateTime.Parse(values[i].ToString()) + "', 'DD/MM/YYYY HH:MI')");

                if (i < values.Count - 1)
                    sql.Append(",");
            }

            sql.Append(");");
            return _postgreSQLConnection.ExecuteQuery(sql.ToString());
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
                if (newValue.GetType().Equals(typeof(string)))
                    sql.Append(props[i].Name  + " = '" + newValue + "'");
                if (newValue.GetType().Equals(typeof(int)))
                    sql.Append(props[i].Name +" = " + newValue); 
                if (newValue.GetType().Equals(typeof(DateTime)))
                    sql.Append(props[i].Name + " = TO_TIMESTAMP('" + DateTime.Parse(newValue.ToString()) + "', 'DD/MM/YYYY HH:MI')");

                if (i < props.Count - 1)
                    sql.Append(", ");
            }
            sql.Append(" WHERE Id = " + entity.Id + ";");
            return _postgreSQLConnection.ExecuteQuery(sql.ToString());
        }


        public void Remove(T entity)
        {

            //_context.Set<T>().Remove(entity);
            //_context.SaveChanges();
        }

        public T GetById(int id)
        {
            StringBuilder sql = new StringBuilder();
            sql.Append("SELECT * FROM " + typeof(T).Name + " WHERE Id = " + id);
            var list = _postgreSQLConnection.ListAll2(sql.ToString());
            if(list != null)
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


        public IEnumerable<T> ListByParam(Parameters<T> parameters)
        {
            var orderByClass = ObtenerOrderBy(parameters);
            Expression<Func<T, bool>> whereTrue = x => true;
            var where = parameters.Where ?? whereTrue;
            List<T> listEntity = new List<T>();
            var list = _postgreSQLConnection.ListAll2("SELECT * FROM " + typeof(T).Name + where);
            listEntity = ConvertDataTable<T>(list);

            return listEntity;
            //if (orderByClass.IsAscending)
            //{
            //    return _context.Set<T>().Where(where).OrderBy(orderByClass.OrderBy)
            //    .Take(parameters.Top).ToList();
            //}
            //else
            //{
            //    return _context.Set<T>().Where(where).OrderByDescending(orderByClass.OrderBy)
            //    .Take(parameters.Top).ToList();
            //}
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
                if (pro != null)
                {
                    pro.SetValue(obj, dr[column.ColumnName], null);
                }
            }
            return obj;
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
