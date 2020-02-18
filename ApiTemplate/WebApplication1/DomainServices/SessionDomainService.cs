using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.DataAccess;
using WebApplication1.DataAccess.Repository;
using WebApplication1.DomainServices.Contracts;
using WebApplication1.DomainServices.Entities;
using WebApplication1.Models;

namespace WebApplication1.DomainServices
{
    public class SessionDomainService : ISessionDomainService
    {
        private readonly PostgreSQLConnection _postgreSQLConnection;
        //private readonly IRepository<Test> _repo;


        public SessionDomainService()
        {
            _postgreSQLConnection = new PostgreSQLConnection();
            

        }


        public RequestResult<Session> Login(Login login)
        {
            var list = _postgreSQLConnection.ListAll("select * from test");
            
            
            var session = new Session()
            {
                UserName = "harlin",
                RoleName = "Administrador"
            };

            return RequestResult<Session>.CreateSuccesfull(session);
        }

    }
    public class Test
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
