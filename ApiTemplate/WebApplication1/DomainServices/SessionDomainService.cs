using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.DataAccess;
using WebApplication1.DataAccess.Context;
using WebApplication1.DataAccess.Repository;
using WebApplication1.DomainServices.Contracts;
using WebApplication1.DomainServices.Entities;
using WebApplication1.Models;

namespace WebApplication1.DomainServices
{
    public class SessionDomainService : ISessionDomainService
    {

        
        private readonly IRepository<Role> _roleRepo;
        private readonly IRepository<Person> _personRepo;
        public SessionDomainService(IRepository<Role> roleRepo, IRepository<Person> personRepo)
        {
            _roleRepo = roleRepo;
            _personRepo = personRepo;
        }


        public RequestResult<Session> Login(Login login)
        {

            var list = _personRepo.ListAll();
            var session = new Session()
            {
                UserName = "harlin",
                RoleName = "Administrador"
            };

            return RequestResult<Session>.CreateSuccesfull(session);
        }

    }

}
