using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.DataAccess.Repository;
using WebApplication1.DomainServices.Contracts;
using WebApplication1.DomainServices.Entities;
using WebApplication1.Models;

namespace WebApplication1.DomainServices
{
    public class SessionDomainService : ISessionDomainService
    {
        //private readonly IRepository<Role> _roleRepo;

        //public SessionDomainService(IRepository<Role> roleRepo)
        //{
        //    _roleRepo = roleRepo;
        //}


        public RequestResult<Session> Login(Login login)
        {
            //var role = _roleRepo.ListAll();

            var session = new Session()
            {
                UserName = "harlin",
                RoleName = "Administrador"
            };

            return RequestResult<Session>.CreateSuccesfull(session);
        }

    }
}
