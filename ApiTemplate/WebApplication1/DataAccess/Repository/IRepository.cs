using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.DomainServices.Entities;
using WebApplication1.Models;

namespace WebApplication1.DataAccess.Repository
{
    public interface IRepository<T> where T : EntityBase
    {
        bool Add(T entity);
        T AddWithReturn(T entity);
        void Remove(T entity);
        void RemoveByWhere(T entity, string where);
        bool Update(T entity);
        T GetById(int id);
        IEnumerable<T> ListByParam(Parameters<T> parameters);
        IEnumerable<T> ListAll();
        IEnumerable<T> ListByWhere(string sql);
        IEnumerable<T> CustomList(string sql);
        bool CustomQuery(string sql);
    }
}
