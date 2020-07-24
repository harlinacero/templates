using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Web;
using WebApplication1.AppServices.Contrracts;
using WebApplication1.DomainServices.Entities;
using WebApplication1.Models;
using Newtonsoft.Json;
using WebApplication1.Helpers;
using System.Text;
using System.IO;
using System;
using System.Data;
using System.Linq;
using System.Reflection;
using ClosedXML.Excel;
using Microsoft.AspNetCore.Http;

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
        public RequestResult<IEnumerable<Vw_billing>> GetAllBilling(string startDate = null, string endDate = null)
        {
            return _billingAppService.GetAllBilling(startDate, endDate);
        }

        /// <summary>
        /// Get billings by filters
        /// </summary>
        /// <param name="numberBilling"></param>
        /// <param name="providerid"></param>
        /// <param name="billingtype"></param>
        /// <param name="producttype"></param>
        /// <param name="costcenterid"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("GetAllBillingWithParams")]
        public RequestResult<IEnumerable<Vw_billing>> GetAllBillingWithParams(string numberBilling = null, string providerid = null, string billingtype = null, string producttype = null, string costcenterid = null)
        {
            return _billingAppService.GetAllBillingWithParams(numberBilling, providerid, billingtype, producttype, costcenterid);
        }

        [HttpGet]
        [Route("ExportToExcel")]
        public ActionResult ExportToExcel(string numberBilling = null, string providerid = null, string billingtype = null, string producttype = null, string costcenterid = null)
        {
            var items = _billingAppService.GetAllBillingWithParams(numberBilling, providerid, billingtype, producttype, costcenterid).Result;
            var table = CreateDataTableForPropertiesOfType<Vw_billing>();
            PropertyInfo[] piT = typeof(Vw_billing).GetProperties();

            foreach (var item in items)
            {
                var dr = table.NewRow();

                for (int property = 0; property < table.Columns.Count; property++)
                {
                    if (piT[property].CanRead)
                    {
                        dr[property] = piT[property].GetValue(item, null);
                    }
                }

                table.Rows.Add(dr);
            }

            string filename = "test";
            string save_path = AppDomain.CurrentDomain.BaseDirectory + "Content/Personal/" + filename;
            //HttpContext.Response.Clear();
            //HttpContext.Response.ClearContent();
            //HttpContext.Response.ClearHeaders();
            //HttpContext.Response.AddHeader("content-disposition", string.Format("attachment; filename={0}", filename));
            //HttpContext.Response.ContentType = "application/excel";
            //HttpContext.Response.WriteFile(save_path);
            //HttpContext.Response.End();
            //System.IO.File.Delete(save_path);
            return new EmptyResult();

        }

        public static DataTable CreateDataTableForPropertiesOfType<T>()
        {
            DataTable dt = new DataTable();
            PropertyInfo[] piT = typeof(T).GetProperties();

            foreach (PropertyInfo pi in piT)
            {
                Type propertyType = null;
                if (pi.PropertyType.IsGenericType)
                {
                    propertyType = pi.PropertyType.GetGenericArguments()[0];
                }
                else
                {
                    propertyType = pi.PropertyType;
                }
                DataColumn dc = new DataColumn(pi.Name, propertyType);

                if (pi.CanRead)
                {
                    dt.Columns.Add(dc);
                }
            }

            return dt;
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


        ///// <summary>
        ///// Update or add billing
        ///// </summary>
        ///// <param name="billing"></param>
        ///// <returns></returns>
        [HttpGet]
        [Route("ContinueAprovalProcess")]
        public RequestResult<string> ContinueAprovalProcess(string numberbilling, int userCode, int newStatus, string observations)
        {

            return _billingAppService.ContinueAprovalProcess(numberbilling, userCode, newStatus, observations);
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

        /// <summary>
        /// Get all billing
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("GetDetailBilling")]
        public RequestResult<IEnumerable<VW_billing_data>> GetDetailBilling(string numberBilling)
        {
            return _billingAppService.GetDetailBilling(numberBilling);
        }

        #endregion



    }

}
