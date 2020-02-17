using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.AppServices.Contrracts;
using WebApplication1.DataAccess;
using WebApplication1.DomainServices.Contracts;
using WebApplication1.DomainServices.Entities;
using WebApplication1.Models;

namespace WebApplication1.AppServices
{
    public class SessionAppService : ISessionAppService
    {
        private readonly ISessionDomainService _sessionDomainService;
        //private readonly UnitOfWork _unitOfWork;
        //private readonly AppDbContext _context;

        public SessionAppService(ISessionDomainService sessionDomainService)
        {
            //UnitOfWork _unitOfWork = new UnitOfWork(context);

            _sessionDomainService = sessionDomainService;
        }


        public RequestResult<Session> Login(Login login)
        {
            try
            {
                //var a = _unitOfWork.RoleRepo.ListAll();
                return _sessionDomainService.Login(login);
            }
            catch (Exception ex)
            {
                return RequestResult<Session>.CreateUnSuccesfull(ex.Message);
            }
        }
    }
}
