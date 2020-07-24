using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.DataAccess.Repository;
using WebApplication1.DomainServices.Contracts;
using WebApplication1.DomainServices.Entities;
using WebApplication1.Models;

namespace WebApplication1.DomainServices
{
    public class HomeDomainService: IHomeDomainService
    {
        private readonly IRepository<Vw_totalBillings> _totalBillingRepo;
        private readonly IRepository<Vw_total_billing_by_month> _totalBillingMonthRepo;
        private readonly IRepository<Vw_total_billing_by_status> _totalBillingByStatus;
        public HomeDomainService(IRepository<Vw_totalBillings> totalBillingRepo, IRepository<Vw_total_billing_by_month> totalBillingMonthRepo,
            IRepository<Vw_total_billing_by_status> totalBillingByStatus)
        {
            _totalBillingRepo = totalBillingRepo;
            _totalBillingMonthRepo = totalBillingMonthRepo;
            _totalBillingByStatus = totalBillingByStatus;
        }

        public RequestResult<IEnumerable<Vw_total_billing_by_month>> GetAllBillingsByMonth()
        {
            var list = _totalBillingMonthRepo.ListAll();
            return RequestResult<IEnumerable<Vw_total_billing_by_month>>.CreateSuccesfull(list);
        }

        public RequestResult<IEnumerable<Vw_total_billing_by_status>> GetAllBillingsByStatus()
        {
            var list = _totalBillingByStatus.ListAll();
            return RequestResult<IEnumerable<Vw_total_billing_by_status>>.CreateSuccesfull(list);
        }

        public RequestResult<IEnumerable<Vw_totalBillings>> GetAllIndicators()
        {
            var list = _totalBillingRepo.ListAll();
            return RequestResult<IEnumerable<Vw_totalBillings>>.CreateSuccesfull(list);
        }
    }
}
