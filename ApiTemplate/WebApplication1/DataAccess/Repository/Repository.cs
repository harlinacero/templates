using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using WebApplication1.DomainServices.Entities;
using WebApplication1.Models;

namespace WebApplication1.DataAccess.Repository
{
    public class Repository<T> : IRepository<T> where T : EntityBase, new()
    {

        private readonly AppDbContext _context;

        public Repository(AppDbContext context)
        {
            _context = context;
        }


        public T Add(T entity)
        {
            entity.DateModified = DateTime.Now;
            _context.Set<T>().Add(entity);
            _context.SaveChanges();
            return entity;
        }


        public T Update(T entity)
        {
            entity.DateModified = DateTime.Now;
            _context.Set<T>().Update(entity);
            _context.SaveChanges();
            return entity;
        }


        public void Remove(T entity)
        {

            _context.Set<T>().Remove(entity);
            _context.SaveChanges();
        }

        public T GetById(int id)
        {
            return _context.Set<T>().FirstOrDefault(x => x.Id == id);
        }

        public IEnumerable<T> ListAll()
        {
            return _context.Set<T>().ToList();
        }


        public IEnumerable<T> ListByParam(Parameters<T> parameters)
        {
            var orderByClass = ObtenerOrderBy(parameters);
            Expression<Func<T, bool>> whereTrue = x => true;
            var where = parameters.Where ?? whereTrue;

            if (orderByClass.IsAscending)
            {
                return _context.Set<T>().Where(where).OrderBy(orderByClass.OrderBy)
                .Take(parameters.Top).ToList();
            }
            else
            {
                return _context.Set<T>().Where(where).OrderByDescending(orderByClass.OrderBy)
                .Take(parameters.Top).ToList();
            }
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
