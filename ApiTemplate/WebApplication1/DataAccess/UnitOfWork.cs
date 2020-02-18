using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.DataAccess.Repository;
using WebApplication1.DomainServices.Entities;
using WebApplication1.Models;

namespace WebApplication1.DataAccess
{
    public class UnitOfWork: IUnitofWork
    {
        //private Repository<Role> _roleRepo;
        //private AppDbContext _appDbContext;

        //public UnitOfWork(AppDbContext appDbContext)
        //{
        //    _appDbContext = appDbContext;
        //    _roleRepo = new Repository<Role>(_appDbContext);
        //}

        //public Repository<Role> RoleRepo
        //{
        //    get
        //    {
        //        if(_roleRepo == null)
        //        {
        //            _roleRepo = new Repository<Role>(_appDbContext);
        //        }
        //        return _roleRepo;
        //    }
        //}



    }
}
