using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.DomainServices.Entities;
using WebApplication1.Models;

namespace WebApplication1.DomainServices.Contracts
{
    public interface IBillingDomainService
    {
        RequestResult<IEnumerable<Billing>> GetAllBilling();
        RequestResult<Billing> GetBillingById(int id);
        RequestResult<Billing> SaveBilling(IFormFile file, Billing billing);
        RequestResult<IEnumerable<Status>> GetStates();
        RequestResult<IEnumerable<TypeBilling>> GetAllTypeBilling();

        RequestResult<byte[]> DownloadFile(string nameFile);
    }
}
