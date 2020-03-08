using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.DomainServices.Entities;
using WebApplication1.Models;

namespace WebApplication1.DomainServices.Contracts
{
    public interface ISessionDomainService
    {
        RequestResult<Account> Login(Login login);
    }
}
