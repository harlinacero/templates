using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using WebApplication1.DomainServices.Entities;
using WebApplication1.Models;

namespace WebApplication1.AppServices.Contrracts
{
    public interface IBillingAppService
    {
        RequestResult<IEnumerable<Billing>> GetAllBilling();
        RequestResult<Billing> SaveBilling(Billing billing, IFormFile file);
        RequestResult<Billing> GetBillingById(int id);
        RequestResult<IEnumerable<Status>> GetStates();
        RequestResult<IEnumerable<TypeBilling>> GetAllTypeBilling();

        RequestResult<byte[]> DownloadFile(string nameFile);
        RequestResult<string> ContinueAprovalProcess(string numberbilling, int userCode, int newStatus, string observations);
    }
}
