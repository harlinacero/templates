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
        private readonly IRepository<VW_billing_data> _billingDataRepo;
        private readonly IRepository<AprovalBillingProcess> _processAprovalRepo;
        private readonly IRepository<AprovalMatrix> _aprobalmatrixRepo;
        //private readonly IRepository<Person> _personRepo;
        //private readonly IRepository<Provider> _providerRepo;
        private readonly IRepository<Company> _companyRepo;
        private readonly IRepository<CostCenter> _costCenterRepo;

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
            IRepository<VW_billing_data> billingDataRepo, IRepository<AprovalBillingProcess> processAprovalRepo,
            IRepository<AprovalMatrix> aprobalmatrixRepo, IRepository<Person> personRepo,
            IRepository<Provider> providerRepo, IRepository<Company> companyRepo,
            IRepository<CostCenter> costCenterRepo,
            IHostingEnvironment env)
        {
            _billingRepo = billingRepo;
            _stateRepo = stateRepo;
            _typeBilingRepo = typeBilingRepo;
            _billingDataRepo = billingDataRepo;
            _processAprovalRepo = processAprovalRepo;
            _aprobalmatrixRepo = aprobalmatrixRepo;
            //_personRepo = personRepo;
            //_providerRepo = providerRepo;
            _companyRepo = companyRepo;
            _costCenterRepo = costCenterRepo;
            _env = env;
        }
        #endregion

        /// <summary>
        /// Get all billings
        /// </summary>
        /// <returns></returns>
        public RequestResult<IEnumerable<Billing>> GetAllBilling()
        {
            var list = _billingRepo.ListAll();
            return RequestResult<IEnumerable<Billing>>.CreateSuccesfull(list);
        }

        /// <summary>
        /// Get list of billing
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public RequestResult<Billing> GetBillingById(int id)
        {
            var billing = _billingRepo.GetById(id);
            if (billing != null)
            {
                return RequestResult<Billing>.CreateSuccesfull(billing);
            }
            return RequestResult<Billing>.CreateUnSuccesfull("No se encontró el valor indicado");
        }


        /// <summary>
        /// Save billing and begin process aproval
        /// </summary>
        /// <param name="file"></param>
        /// <param name="billing"></param>
        /// <returns></returns>
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

        /// <summary>
        /// Donwnload file of billing
        /// </summary>
        /// <param name="nameFile"></param>
        /// <returns></returns>
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

        /// <summary>
        /// Get lsit of status
        /// </summary>
        /// <returns></returns>
        public RequestResult<IEnumerable<Status>> GetStates()
        {
            var list = _stateRepo.ListAll();
            return RequestResult<IEnumerable<Status>>.CreateSuccesfull(list);
        }

        /// <summary>
        /// Get list of types billing
        /// </summary>
        /// <returns></returns>
        public RequestResult<IEnumerable<TypeBilling>> GetAllTypeBilling()
        {
            var list = _typeBilingRepo.ListAll();
            return RequestResult<IEnumerable<TypeBilling>>.CreateSuccesfull(list);
        }


        public RequestResult<IEnumerable<VW_billing_data>> GetDetailBilling(int numberBilling)
        {
            var list = _billingDataRepo.ListByWhere($"{nameof(VW_billing_data.NumeroFactura)} = {numberBilling}").ToList();
            if (list != null && list.Count > 0)
                return RequestResult<IEnumerable<VW_billing_data>>.CreateSuccesfull(list);

            return RequestResult<IEnumerable<VW_billing_data>>.CreateUnSuccesfull("La factura no fue encontrada");
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="numberbilling"></param>
        /// <param name="userCode"></param>
        /// <param name="newStatus"></param>
        /// <param name="observations"></param>
        /// <returns></returns>
        public RequestResult<string> ContinueAprovalProcess(string numberbilling, int userCode, int newStatus, string observations)
        {
            var billing = _billingRepo.ListByWhere($"{nameof(Billing.NumberBilling)} = {numberbilling}").FirstOrDefault();
            if (billing != null)
            {
                var process = _billingDataRepo.ListByWhere($"{nameof(VW_billing_data.NumeroFactura)} = {numberbilling}").ToList();
                billing.Stateid = newStatus;
                billing.UserChange = userCode;
                billing.DateModified = DateTime.Now;
                billing.CasueRejection = observations;
                return VerifyNextLevelAproval(process, billing);
            }


            return RequestResult<string>.CreateUnSuccesfull($"La factura con número {numberbilling} no fue encontrada");
        }

        /// <summary>
        /// validate if process continue or finish
        /// </summary>
        /// <param name="process"></param>
        /// <param name="billing"></param>
        /// <returns></returns>
        private RequestResult<string> VerifyNextLevelAproval(List<VW_billing_data> process, Billing billing)
        {
            var currentProcessLevel = process.Find(pro => pro.PersonAprovalId == billing.UserChange);
            var nextProcessLevel = process.Find(pro => pro.LevelAprobation == currentProcessLevel.LevelAprobation + 1);
            AprovalBillingProcess aprovalProcess = _processAprovalRepo.GetById(currentProcessLevel.IdProces);
            aprovalProcess.Observations = billing.CasueRejection;
            aprovalProcess.PersonAprovalId = billing.UserChange;
            aprovalProcess.DateChange = DateTime.Now;
            aprovalProcess.Statusid = billing.Stateid;
            aprovalProcess.DateModified = DateTime.Now;

            if (nextProcessLevel == null)
            {
                billing.CasueRejection = currentProcessLevel.Observaciones;
                return FinishProcess(billing, aprovalProcess, currentProcessLevel);
            }
            else if (billing.ValueBill <= currentProcessLevel.ValorMaximo && billing.ValueBill > currentProcessLevel.ValorMinimo)
            {
                billing.CasueRejection = currentProcessLevel.Observaciones;
                billing.UserRejection = billing.UserChange;
                return FinishProcess(billing, aprovalProcess, currentProcessLevel);
            }
            else
            {
                billing.Stateid = (billing.DateLimit < DateTime.Now) ? (int)EnumStatusBilling.ATiempo : (int)EnumStatusBilling.Tarde;
                return ContinueNextLevel(billing, aprovalProcess, currentProcessLevel, nextProcessLevel);
            }

        }



        private RequestResult<string> ContinueNextLevel(Billing billing, AprovalBillingProcess aprovalProcess, VW_billing_data currentProcessLevel, VW_billing_data nextProcessLevel)
        {
            var nextProcess = _processAprovalRepo.GetById(nextProcessLevel.IdProces);

            // Actualizamos el nivel actual
            var responsedate = DateTime.Now - currentProcessLevel.FechaSolicitud;
            var newStatus = responsedate.Days < currentProcessLevel.DiasPactados ? (int)EnumStatusBilling.Aprobada : (int)EnumStatusBilling.Tarde;
            aprovalProcess.Statusid = newStatus;
            aprovalProcess.DateModified = DateTime.Now;
            aprovalProcess.DateChange = DateTime.Now;

            //Actualizamos el nuevo nivel y Notificamos al siguiente aprobador
            nextProcess.Statusid = (int)EnumStatusBilling.ATiempo;
            nextProcess.DateRequest = DateTime.Now;
            nextProcess.Observations = "";
            _processAprovalRepo.Update(aprovalProcess);
            _processAprovalRepo.Update(nextProcess);
            _billingRepo.Update(billing);

            SendMailToNextLevelAprobal(billing, nextProcessLevel);

            return RequestResult<string>.CreateSuccesfull("Proceso de Aprobación actualizado");
        }




        private RequestResult<string> FinishProcess(Billing billing, AprovalBillingProcess aprovalProcess, VW_billing_data currentProcessLevel)
        {
            _processAprovalRepo.Update(aprovalProcess);
            _billingRepo.Update(billing);


            BuildEmail(billing, currentProcessLevel);
            return RequestResult<string>.CreateSuccesfull("Proceso de Aprobación finalizado");
        }



        private RequestResult<Billing> AddBilling(Billing billing, string newPath)
        {
            StringBuilder sql = new StringBuilder();
            sql.Append("SELECT * FROM fn_begin_process_aproval (");
            sql.Append($"{billing.NumberBilling}, ");
            sql.Append($"{billing.ProviderId}, ");
            sql.Append($"{billing.BillingType}, ");
            sql.Append($"{billing.ProductType}, ");
            sql.Append($"{billing.CostcenterId}, ");
            sql.Append($"{billing.ExchangeRate}, ");
            sql.Append($"'{DateTime.Parse(billing.DateBilling.ToString())}', ");
            sql.Append($"'{DateTime.Parse(billing.DateLimit.ToString())}' ,");
            sql.Append($"'{DateTime.Parse(billing.DateFiled.ToString())}' ,");
            sql.Append($"{billing.ValueBill}, ");
            sql.Append($"'{newPath}', ");
            sql.Append($"'{billing.UserChange}')");

            if (_billingRepo.CustomQuery(sql.ToString()))
            {
                VW_billing_data process = _billingDataRepo.ListByWhere($"{nameof(VW_billing_data.NumeroFactura)} = {billing.NumberBilling} AND " +
                    $"{nameof(VW_billing_data.LevelAprobation)} = {1}").FirstOrDefault();

                if (process != null)
                {
                    string subject = GetSubject(billing);
                    string bodyMessage = GetMessage(billing);
                    SendMail(subject, process.EmailAprobator, bodyMessage, newPath);
                }
                return RequestResult<Billing>.CreateSuccesfull(billing);
            }

            File.Delete(newPath);
            return RequestResult<Billing>.CreateUnSuccesfull("No se pudo crear");
        }




        private void BuildEmail(Billing billing, VW_billing_data currentProcessLevel)
        {

            switch (billing.Stateid)
            {
                case (int)EnumStatusBilling.Aprobada:
                    SendMailBillingAprobated(billing, currentProcessLevel);
                    break;
                case (int)EnumStatusBilling.Rechazada:
                    SendMailBillingRejected(billing, currentProcessLevel);
                    break;
                default:
                    break;
            }

        }

        private void SendMailBillingRejected(Billing billing, VW_billing_data currentProcessLevel)
        {
            StringBuilder newSubject = new StringBuilder();
            var subject = GetSubject(billing);
            newSubject.Append(subject);
            newSubject.Append($"Su factura {billing.NumberBilling} fue rechazada");
            var bodyBilling = GetMessage(billing);
            SendMail(newSubject.ToString(), currentProcessLevel.EmailProveedor, bodyBilling, currentProcessLevel.Pdf);
        }

        private void SendMailBillingAprobated(Billing billing, VW_billing_data currentProcessLevel)
        {
            StringBuilder newSubject = new StringBuilder();
            var subject = GetSubject(billing);
            newSubject.Append(subject);
            newSubject.Append($"Factura {billing.NumberBilling} del Proveedor {currentProcessLevel.Proveedor} ha sido aprobada por el area {currentProcessLevel.CostCenter}");
            newSubject.Append("Por favor tramitar el pago correspondiente, según datos adjuntos.");
            var bodyBilling = GetMessage(billing);
            SendMail(newSubject.ToString(), currentProcessLevel.EmailCompany, bodyBilling, currentProcessLevel.Pdf);
        }

        private void SendMailToNextLevelAprobal(Billing billing, VW_billing_data data)
        {
            var subject = GetSubject(billing);
            var bodyMessage = GetMessage(billing);

            SendMail(subject, data.EmailAprobator, bodyMessage, billing.RouteFile);

        }

        private bool SendMail(string subject, string address, string bodyMessage, string path)
        {
            var company = _companyRepo.ListAll().FirstOrDefault();
            var from = (company != null) ? "harlinacero@gmail.com" : "harlinacero@gmail.com";
            var password = (company != null) ? "h4rl1n4cer0" : "h4rl1n4cer0";

            if (bodyMessage != null)
            {
                Mail.SendEmail(from, address, password, subject, bodyMessage, path);
                return true;
            }

            return false;
        }



        private string GetMessage(Billing billing)
        {
            StringBuilder message = new StringBuilder();
            var newBilling = GetBillingByNumber(billing.NumberBilling);

            if (newBilling != null)
            {
                message.Append($"<h1>Factura No. {newBilling.NumeroFactura}</h1>");
                message.Append($"<h2>Proveedor. {newBilling.Proveedor}</h2>");
                message.Append($"<p>Producto: {newBilling.TipoProducto}</p>");
                message.Append($"<p>Centro de Costo: { newBilling.CostCenter}</p>");
                message.Append($"<p>Valor: {newBilling.Valor}</p>");
                message.Append($"<p>Fecha Factura: {newBilling.FechaFactura.ToLongDateString()}</p>");
                message.Append($"<p>Fecha Límite: {newBilling.FechaLimite.ToLongDateString()}</p>");
                message.Append($"<p>Por favor actualizar el estado de la factura antes de {newBilling.DiasPactados} dias</p>");
            }

            return message.ToString();
        }




        private string GetSubject(Billing billing)
        {
            var costCenter = _costCenterRepo.GetById(billing.CostcenterId);
            StringBuilder message = new StringBuilder();
            message.Append("Notificación Sistema Aprobación Facturas Proveedores");
            message.Append($"- Solicitud Aprobación Factura {billing.NumberBilling} ");
            message.Append($"- Area: {costCenter.Name} Fecha Límite: {billing.DateLimit.ToLongDateString()}");

            return message.ToString();
        }


        private VW_billing_data GetBillingByNumber(int numberBilling, int levelAprobation = 0)
        {
            StringBuilder sql = new StringBuilder();

            sql.Append("SELECT * ");
            sql.Append("FROM VW_BILLING_DATA ");
            sql.Append($"WHERE ");
            sql.Append($"NUMEROFACTURA = {numberBilling}");

            if (levelAprobation != 0)
                sql.Append($" AND LEVELAPROBATION = {levelAprobation}");


            var query = _billingDataRepo.CustomList(sql.ToString()).ToList();
            if (query.Count > 0)
            {
                return query.FirstOrDefault();
            }

            return null;
        }

    }
}
