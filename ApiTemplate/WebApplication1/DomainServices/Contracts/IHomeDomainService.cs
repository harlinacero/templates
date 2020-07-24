using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.DomainServices.Entities;
using WebApplication1.Models;

namespace WebApplication1.DomainServices.Contracts
{
    public interface IHomeDomainService
    {
        RequestResult<IEnumerable<Vw_totalBillings>> GetAllIndicators();
        RequestResult<IEnumerable<Vw_total_billing_by_month>> GetAllBillingsByMonth();
        RequestResult<IEnumerable<Vw_total_billing_by_status>> GetAllBillingsByStatus();
    }
}
