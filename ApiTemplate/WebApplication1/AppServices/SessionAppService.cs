using System;
using WebApplication1.AppServices.Contrracts;
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
            _sessionDomainService = sessionDomainService;
        }


        public RequestResult<Account> Login(Login login)
        {
            try
            {
                //var a = _unitOfWork.RoleRepo.ListAll();
                return _sessionDomainService.Login(login);
            }
            catch (Exception ex)
            {
                return RequestResult<Account>.CreateUnSuccesfull(ex.Message);
            }
        }
    }
}
