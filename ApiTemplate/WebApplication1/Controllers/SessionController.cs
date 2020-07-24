using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.AppServices.Contrracts;
using WebApplication1.DomainServices.Entities;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SessionController : ControllerBase
    {
        private readonly ISessionAppService _sessionAppService;

        public SessionController(ISessionAppService sessionAppService)
        {
            _sessionAppService = sessionAppService;
        }

        [HttpPost]
        [Route("Login")]
        public RequestResult<Account> Login(Login login)
        {
            return _sessionAppService.Login(login);
        }

        [HttpGet]
        [Route("SendEmail")]
        public RequestResult<string> SendEmail(string email)
        {
            return _sessionAppService.SendEmail(email);
        }

        [HttpGet]
        [Route("RestorePassword")]
        public RequestResult<string> RestorePassword(string code, string password)
        {
            return _sessionAppService.RestorePassword(code, password);
        }


    }
}