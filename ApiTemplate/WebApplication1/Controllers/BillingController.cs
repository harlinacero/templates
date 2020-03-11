using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using WebApplication1.AppServices.Contrracts;
using WebApplication1.DomainServices.Entities;
using WebApplication1.Models;
using Newtonsoft.Json;
using WebApplication1.Helpers;

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
        ///// <summary>
        ///// Update or add billing
        ///// </summary>
        ///// <param name="billing"></param>
        ///// <returns></returns>
        [HttpPost]
        [Route("SaveBilling")]
        public RequestResult<Billing> SaveBilling(string billing)
        {
            var file = Request.Form.Files[0];
            if (file != null)
            {
                Billing bill = JsonConvert.DeserializeObject<Billing>(billing);
                //Billing billing = new Billing();
                return _billingAppService.SaveBilling(bill, file);
            }
            return RequestResult<Billing>.CreateUnSuccesfull("No se ha cargado ninguna factura");


        }


        /// <summary>
        /// Export datasource file
        /// </summary>
        /// <param name="nameFile">Name File to download</param>
        /// <returns></returns>
        [HttpGet("DownloadFile")]
        public ActionResult DownloadFile(string nameFile)
        {
            var res = _billingAppService.DownloadFile(nameFile);
            if (res.IsSuccesfull)
            {
                return File(res.Result, MimeType.GetMimeType(nameFile.Split(".")[1]), nameFile);
            }

            return null;

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

        /// <summary>
        /// Get billing by Id
        /// </summary>
        /// <param name="Id"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("GetStates")]
        public RequestResult<IEnumerable<Status>> GetStates()
        {
            return _billingAppService.GetStates();
        }

        /// <summary>
        /// Get all billing
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("GetAllTypeBilling")]
        public RequestResult<IEnumerable<TypeBilling>> GetAllTypeBilling()
        {
            return _billingAppService.GetAllTypeBilling();
        }

        #endregion



    }
}
