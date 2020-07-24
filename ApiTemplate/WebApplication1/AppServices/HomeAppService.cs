using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.AppServices.Contrracts;
using WebApplication1.DomainServices.Contracts;
using WebApplication1.DomainServices.Entities;
using WebApplication1.Models;

namespace WebApplication1.AppServices
{
    public class HomeAppService : IHomeAppService
    {
        public readonly IHomeDomainService _homeDomainService;

        public HomeAppService(IHomeDomainService homeDomainService)
        {
            _homeDomainService = homeDomainService;
        }

        public RequestResult<IEnumerable<Vw_total_billing_by_month>> GetAllBillingsByMonth()
        {
            return _homeDomainService.GetAllBillingsByMonth();
        }

        public RequestResult<IEnumerable<Vw_total_billing_by_status>> GetAllBillingsByStatus()
        {
            return _homeDomainService.GetAllBillingsByStatus();
        }

        public RequestResult<IEnumerable<Vw_totalBillings>> GetAllIndicators()
        {
            return _homeDomainService.GetAllIndicators();
        }
    }
}
