using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using WebApplication1.DataAccess.Repository;
using WebApplication1.DomainServices.Contracts;
using WebApplication1.DomainServices.Entities;
using WebApplication1.Helpers;
using WebApplication1.Models;

namespace WebApplication1.DomainServices
{
    public class BillingDomainService : IBillingDomainService
    {

        #region Fields
        private readonly IRepository<Billing> _billingRepo;
        private readonly IRepository<Status> _stateRepo;
        private readonly IRepository<TypeBilling> _typeBilingRepo;
        private readonly IRepository<VW_BillingData> _billingDataRepo;

        /// <summary>
        /// Current path repository of dashboards files
        /// </summary>
        private const string CURRENT_PATH = "\\App_Data\\Facturas\\";
        /// <summary>
        /// Environment vars
        /// </summary>
        private readonly IHostingEnvironment _env;
        #endregion

        #region Builder
        public BillingDomainService(IRepository<Billing> billingRepo, IRepository<Status> stateRepo, IRepository<TypeBilling> typeBilingRepo,
            IRepository<VW_BillingData> billingDataRepo, IHostingEnvironment env)
        {
            _billingRepo = billingRepo;
            _stateRepo = stateRepo;
            _typeBilingRepo = typeBilingRepo;
            _billingDataRepo = billingDataRepo;
            _env = env;
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



        public RequestResult<Billing> SaveBilling(IFormFile file, Billing billing)
        {

            var newPath = Path.Combine(_env.ContentRootPath + CURRENT_PATH, file.FileName);
            try
            {

                if (File.Exists(newPath))
                    return RequestResult<Billing>.CreateUnSuccesfull("Ya existe una factua con el mismo nombre");

                if (!File.Exists(newPath))
                {
                    // This statement ensures that the file is created,but the handle is not kept.
                    using (FileStream fs = File.Create(newPath)) { }
                    using (var stream = new FileStream(newPath, FileMode.Create))
                    {
                        file.CopyTo(stream);
                    }

                    var billingEntity = _billingRepo.GetById(billing.NumberBilling);
                    billing.RouteFile = newPath;
                    if (billingEntity != null)
                        return UpdateBilling(billing);

                    return AddBilling(billing, newPath);
                }



                return RequestResult<Billing>.CreateSuccesfull(billing);

            }
            catch (Exception e)
            {
                File.Delete(newPath);
                return RequestResult<Billing>.CreateUnSuccesfull(e.Message);
            }
        }


        public RequestResult<byte[]> DownloadFile(string nameFile)
        {
            var path = Path.Combine(_env.ContentRootPath + CURRENT_PATH, nameFile);
            if (File.Exists(path))
            {
                var file = File.ReadAllBytes(path);
                return RequestResult<byte[]>.CreateSuccesfull(file); //missing ;
            }

            return null;
        }


        public RequestResult<IEnumerable<Status>> GetStates()
        {
            var list = _stateRepo.ListAll();
            return RequestResult<IEnumerable<Status>>.CreateSuccesfull(list);
        }


        public RequestResult<IEnumerable<TypeBilling>> GetAllTypeBilling()
        {
            var list = _typeBilingRepo.ListAll();
            return RequestResult<IEnumerable<TypeBilling>>.CreateSuccesfull(list);
        }




        private RequestResult<Billing> AddBilling(Billing billing, string newPath)
        {
            if (_billingRepo.Add(billing))
            {
                string subject = GetSubject(billing);
                string bodyMessage = GetMessage(billing);
                Mail.SendEmail("harlinacero@gmail.com", "harferace@hotmail.com", "h4rl1n4cer0", subject, bodyMessage, billing.RouteFile);
                return RequestResult<Billing>.CreateSuccesfull(billing);
            }

            File.Delete(newPath);
            return RequestResult<Billing>.CreateUnSuccesfull("No se pudo crear");
        }

        private string GetMessage(Billing billing)
        {
            StringBuilder message = new StringBuilder();
            var newBilling = GetBillingByNumber(billing.NumberBilling);
            if (newBilling != null)
            {
                message.Append($"<h1>Factura No. {newBilling.Numerofactura}</h1>");
                message.Append($"<h2>Proveedor. {newBilling.Proveedor}</h2>");
                message.Append($"<p>Producto: {newBilling.Tipoproducto} {newBilling.Costcenter}</p>");
                message.Append($"<p>{newBilling.Valor}</p>");
                message.Append($"<p>{newBilling.Fechafactura.ToLongDateString()}</p>");
                message.Append($"<p>{newBilling.Fechafactura.ToLongDateString()}</p>");
            }

            return message.ToString();
        }



        private RequestResult<Billing> UpdateBilling(Billing billing)
        {
            if (_billingRepo.Update(billing))
                return RequestResult<Billing>.CreateSuccesfull(billing);
            return RequestResult<Billing>.CreateUnSuccesfull("No se pudo actualizar");
        }

        private string GetSubject(Billing billing)
        {
            StringBuilder message = new StringBuilder();
            message.Append("Notificación Sistema Aprobación Facturas Proveedores");
            message.Append($"- Solicitud Aprobación Factura {billing.NumberBilling} ");
            message.Append($"- Area: ZZ Fecha Límite: {billing.DateLimit.ToLongDateString()}");
            return message.ToString();
        }

        private VW_BillingData GetBillingByNumber(int numberBilling)
        {
            StringBuilder sql = new StringBuilder();

            sql.Append("SELECT * ");
            sql.Append("FROM VW_BILLING_DATA ");
            sql.Append($"WHERE ESTADOID = {(int)EnumStatusBilling.ProcesoArobación} AND ");
            sql.Append($"LEVELAPROBATION = {1} AND ");
            sql.Append($"NUMEROFACTURA = {numberBilling}");


            var query = _billingDataRepo.CustomList(sql.ToString()).ToList();
            if (query.Count > 0)
            {
                return query.FirstOrDefault();
            }

            return null;
        }

    }
}
