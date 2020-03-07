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
    public class BillingAppService : IBillingAppService
    {

        public readonly IBillingDomainService _billingDomainService;

        public BillingAppService(IBillingDomainService billingDomainService)
        {
            _billingDomainService = billingDomainService;
        }


        public RequestResult<IEnumerable<Billing>> GetAllBilling()
        {
            try
            {
                return _billingDomainService.GetAllBilling();
            }
            catch (Exception ex)
            {

                return RequestResult<IEnumerable<Billing>>.CreateUnSuccesfull(ex.Message);
            }
        }

        public RequestResult<Billing> GetBillingById(int id)
        {
            try
            {
                return _billingDomainService.GetBillingById(id);
            }
            catch (Exception ex)
            {
                return RequestResult<Billing>.CreateUnSuccesfull(ex.Message);
            }
        }


        public RequestResult<Billing> SaveBilling(Billing billing)
        {
            try
            {
                return _billingDomainService.SaveBilling(billing);
            }
            catch (Exception ex)
            {
                return RequestResult<Billing>.CreateUnSuccesfull(ex.Message);
            }
        }


        public RequestResult<IEnumerable<Status>> GetStates()
        {
            try
            {
                return _billingDomainService.GetStates();
            }
            catch (Exception ex)
            {
                return RequestResult<IEnumerable<Status>>.CreateUnSuccesfull(ex.Message);
            }
        }
    }
}
