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

        public RequestResult<string> SendEmail(string email)
        {
            try
            {
                return _sessionDomainService.SendEmail(email);
            }
            catch (Exception ex)
            {
                return RequestResult<string>.CreateUnSuccesfull(ex.Message);
            }
        }

        public RequestResult<string> RestorePassword(string code, string password)
        {
            try
            {
                return _sessionDomainService.RestorePassword(code, password);
            }
            catch (Exception ex)
            {
                return RequestResult<string>.CreateUnSuccesfull(ex.Message);
            }
        }
    }
}
