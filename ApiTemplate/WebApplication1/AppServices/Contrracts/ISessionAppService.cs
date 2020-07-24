using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.DomainServices.Entities;
using WebApplication1.Models;

namespace WebApplication1.AppServices.Contrracts
{
    public interface ISessionAppService
    {
        RequestResult<Account> Login(Login login);
        RequestResult<string> SendEmail(string email);
        RequestResult<string> RestorePassword(string code, string password);
    }
}
