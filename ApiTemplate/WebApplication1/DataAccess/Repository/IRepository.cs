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
        T Add(T entity);
        void Remove(T entity);
        T Update(T entity);
        T GetById(int id);
        IEnumerable<T> ListByParam(Parameters<T> parameters);
        IEnumerable<T> ListAll();

    }
}
