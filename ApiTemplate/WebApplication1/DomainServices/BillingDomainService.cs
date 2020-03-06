using System.Collections.Generic;
using WebApplication1.DataAccess.Repository;
using WebApplication1.DomainServices.Contracts;
using WebApplication1.DomainServices.Entities;
using WebApplication1.Models;

namespace WebApplication1.DomainServices
{
    public class BillingDomainService : IBillingDomainService
    {

        #region Fields
        private readonly IRepository<Billing> _billingRepo;
        #endregion

        #region Builder
        public BillingDomainService(IRepository<Billing> billingRepo)
        {
            _billingRepo = billingRepo;
        }
        #endregion
        public RequestResult<IEnumerable<Billing>> GetAllBilling()
        {
            var list = _billingRepo.ListAll();
            return RequestResult<IEnumerable<Billing>>.CreateSuccesfull(list);
        }

        public RequestResult<Billing> GetBillingById(int id)
        {
            var billing = _billingRepo.GetById(id);
            if (billing != null)
            {
                return RequestResult<Billing>.CreateSuccesfull(billing);
            }
            return RequestResult<Billing>.CreateUnSuccesfull("No se encontró el valor indicado");
        }

        public RequestResult<Billing> SaveBilling(Billing billing)
        {
            var billingEntity = _billingRepo.GetById(billing.Id);
            if (billingEntity != null)
                return UpdateBilling(billing);

            return AddBilling(billing);
        }

        private RequestResult<Billing> AddBilling(Billing billing)
        {
            if (_billingRepo.Add(billing))
                return RequestResult<Billing>.CreateSuccesfull(billing);
            return RequestResult<Billing>.CreateUnSuccesfull("No se pudo crear");
        }

        private RequestResult<Billing> UpdateBilling(Billing billing)
        {
            if (_billingRepo.Update(billing))
                return RequestResult<Billing>.CreateSuccesfull(billing);
            return RequestResult<Billing>.CreateUnSuccesfull("No se pudo actualizar");
        }
    }
}
