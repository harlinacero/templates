using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.AppServices.Contrracts;
using WebApplication1.DomainServices.Entities;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BillingController : ControllerBase
    {
        private readonly IBillingAppService _billingAppService;

        public BillingController(IBillingAppService billingAppService)
        {
            _billingAppService = billingAppService;
        }


        #region Billing

        /// <summary>
        /// Get all billing
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("GetAllBilling")]
        public RequestResult<IEnumerable<Billing>> GetAllBilling()
        {
            return _billingAppService.GetAllBilling();
        }
        /// <summary>
        /// Update or add billing
        /// </summary>
        /// <param name="billing"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("SaveBilling")]
        public RequestResult<Billing> SaveBilling(Billing billing)
        {
            return _billingAppService.SaveBilling(billing);
        }
        /// <summary>
        /// Get billing by Id
        /// </summary>
        /// <param name="Id"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("GetBilling")]
        public RequestResult<Billing> GetBillingById(int Id)
        {
            return _billingAppService.GetBillingById(Id);
        }

        #endregion


        
    }
}
