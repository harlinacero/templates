using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
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


        public RequestResult<Billing> SaveBilling(Billing billing, IFormFile file)
        {
            try
            {
                return _billingDomainService.SaveBilling(file, billing);
            }
            catch (Exception ex)
            {
                return RequestResult<Billing>.CreateUnSuccesfull(ex.Message);
            }
        }

        /// <summary>
        /// Export datasource file
        /// </summary>
        /// <param name="nameFile">Name File to download</param>
        /// <returns></returns>
        public RequestResult<byte[]> DownloadFile(string nameFile)
        {
            try
            {
                return _billingDomainService.DownloadFile(nameFile);

            }
            catch (Exception ex)
            {
               return RequestResult<byte[]>.CreateUnSuccesfull(ex.Message);
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

        public RequestResult<IEnumerable<TypeBilling>> GetAllTypeBilling()
        {
            try
            {
                return _billingDomainService.GetAllTypeBilling();
            }
            catch (Exception ex )
            {
                return RequestResult<IEnumerable<TypeBilling>>.CreateUnSuccesfull(ex.Message);
            }
        }

     
    }
}
