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
        private readonly IRepository<AprovalBillingProcess> _processAprovalRepo;
        private readonly IRepository<AprovalMatrix> _aprobalmatrixRepo;
        private readonly IRepository<Person> _personRepo;
        private readonly IRepository<Provider> _providerRepo;
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
            IRepository<VW_BillingData> billingDataRepo, IRepository<AprovalBillingProcess> processAprovalRepo,
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
            _personRepo = personRepo;
            _providerRepo = providerRepo;
            _companyRepo = companyRepo;
            _costCenterRepo = costCenterRepo;
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

                    //var billingEntity = _billingRepo.GetById(billing.NumberBilling);
                    //billing.RouteFile = newPath;
                    //if (billingEntity != null)
                    //    return UpdateBilling(billing);

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

        public RequestResult<string> ContinueAprovalProcess(string numberbilling, int userCode, int newStatus, string observations)
        {
            var billing = _billingRepo.ListByWhere($"{nameof(Billing.NumberBilling)} = {numberbilling}").FirstOrDefault();
            if (billing != null)
            {
                var matrix = _aprobalmatrixRepo.ListByWhere($"{nameof(AprovalMatrix.CostCenterId)} = {billing.CostcenterId}").OrderBy(x => x.LevelAprobation);
                var process = _processAprovalRepo.ListByWhere($"{nameof(AprovalBillingProcess.Billingid)} = {billing.Id}").OrderBy(x => x.LevelAproval);
                billing.Stateid = newStatus;
                billing.UserChange = userCode;
                billing.DateModified = DateTime.Now;
                return VerifyNextLevelAproval(matrix.ToList(), process, billing);
            }


            return RequestResult<string>.CreateUnSuccesfull($"La factura con número {numberbilling} no fue encontrada");
        }

        private RequestResult<string> VerifyNextLevelAproval(List<AprovalMatrix> matrix, IOrderedEnumerable<AprovalBillingProcess> process, Billing billing)
        {
            AprovalBillingProcess aprovalProcess = new AprovalBillingProcess();
            foreach (var level in matrix)
            {
                aprovalProcess = process.ToList().Find(pro => pro.LevelAproval == level.LevelAprobation);
                if (aprovalProcess != null)
                {
                    aprovalProcess.Observations = billing.CasueRejection;
                    aprovalProcess.PersonAprovalId = billing.UserChange;
                    aprovalProcess.DateChange = DateTime.Now;
                    aprovalProcess.Statusid = billing.Stateid;
                    aprovalProcess.DateModified = DateTime.Now;
                    continue;
                }
            }

            foreach (var level in matrix)
            {
                if (billing.ValueBill <= level.ValueMax && billing.ValueBill > level.ValueMin)
                {
                    return FinishProcess(billing, aprovalProcess);
                }
                else
                {
                    return SearchNextLevel(billing, aprovalProcess, level, process.ToList());
                }
            }

            return FinishProcess(billing, aprovalProcess);

        }

        private RequestResult<string> SearchNextLevel(Billing billing, AprovalBillingProcess aprovalProcess, AprovalMatrix level, List<AprovalBillingProcess> aprovalProcessList)
        {
            var nextLevel = aprovalProcessList.Find(next => next.LevelAproval == level.LevelAprobation + 1);

            if (nextLevel != null)
            {
                nextLevel.DateRequest = DateTime.Now;
                nextLevel.DateModified = DateTime.Now;
                nextLevel.DateChange = DateTime.Now;
                nextLevel.Statusid = (int)EnumStatusBilling.PendienteTiempo;
            }

            _processAprovalRepo.Update(nextLevel);
            _processAprovalRepo.Update(aprovalProcess);
            _billingRepo.Update(billing);

            BuildEmail(billing, nextLevel.PersonAprovalId);

            return RequestResult<string>.CreateSuccesfull("Proceso de Aprobación finalizado");
        }




        private RequestResult<string> FinishProcess(Billing billing, AprovalBillingProcess aprovalProcess)
        {
            _processAprovalRepo.Update(aprovalProcess);
            _billingRepo.Update(billing);
            BuildEmail(billing);
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

                string subject = GetSubject(billing);
                string bodyMessage = GetMessage(billing);
                SendMail(subject, "harferace@hotmail.com", bodyMessage, newPath);
                return RequestResult<Billing>.CreateSuccesfull(billing);
            }


            File.Delete(newPath);
            return RequestResult<Billing>.CreateUnSuccesfull("No se pudo crear");
        }




        private void BuildEmail(Billing billing, int personAprovalId = 0)
        {
            string nameDestiny = "", address = "";
            if (personAprovalId != 0)
            {
                SendMailToNextLevelAprobal(billing, personAprovalId);
            }
            else
            {
                switch (billing.Stateid)
                {
                    case (int)EnumStatusBilling.Aprobada:
                        SendMailBillingAprobated(billing);
                        break;
                    case (int)EnumStatusBilling.Rechazada:
                        var provider = _providerRepo.GetById(billing.ProviderId);
                        if (provider != null)
                        {
                            nameDestiny = provider.BusinessName;
                            address = provider.Email;
                        }
                        break;
                    default:
                        break;
                }
            }



        }

        private void SendMailBillingAprobated(Billing billing)
        {
            StringBuilder message = new StringBuilder();
            var compa = _companyRepo.ListAll().FirstOrDefault();
            var bodyBilling =GetMessage(billing);
            if (compa != null)
            {
                //nameDestiny = compa.BusinessName;
                //address = compa.EmailTreasury;
                var subject = GetSubject(billing);
                message.Append("<p>{}<p>");
                message.Append(bodyBilling);

            }
        }

        private void SendMailToNextLevelAprobal(Billing billing, int personAprovalId)
        {
            var nextAproval = _personRepo.GetById(personAprovalId);
            if (nextAproval != null)
            {
                var nameDestiny = $"{nextAproval.FirstName} {nextAproval.SecondName} {nextAproval.LastName} {nextAproval.SecondName}";
                var address = nextAproval.Email;
                var subject = GetSubject(billing);
                var bodyMessage = GetMessage(billing);

                SendMail(subject, address, bodyMessage, billing.RouteFile);
            }

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


        private bool BeginProcessHistory(Billing billing)
        {
            var matrixlevels = _aprobalmatrixRepo.ListByWhere($"{nameof(AprovalMatrix.CostCenterId)} = {billing.CostcenterId}").OrderBy(x => x.LevelAprobation).ToList();
            if (matrixlevels.Count > 0)
            {
                foreach (var item in matrixlevels)
                {
                    var process = new AprovalBillingProcess()
                    {
                        Billingid = billing.Id,
                        Observations = "",
                        DateRequest = DateTime.Now,
                        DateModified = DateTime.Now,
                        Statusid = (int)EnumStatusBilling.ProcesoArobacion,
                        UserChange = billing.UserChange
                    };

                    if (!_processAprovalRepo.Add(process))
                        _billingRepo.Remove(billing);
                }

                return true;
            }

            return false;

        }


        private RequestResult<Billing> UpdateBilling(Billing billing)
        {
            if (_billingRepo.Update(billing))
                return RequestResult<Billing>.CreateSuccesfull(billing);
            return RequestResult<Billing>.CreateUnSuccesfull("No se pudo actualizar");
        }



        private string GetMessage(Billing billing)
        {
            StringBuilder message = new StringBuilder();
            var newBilling = GetBillingByNumber(billing.NumberBilling);
           
            if (newBilling != null)
            {
                message.Append($"<h1>Factura No. {newBilling.Numerofactura}</h1>");
                message.Append($"<h2>Proveedor. {newBilling.Proveedor}</h2>");
                message.Append($"<p>Producto: {newBilling.Tipoproducto}</p>");
                message.Append($"<p>Centro de Costo: { newBilling.Costcenter}</p>");
                message.Append($"<p>Valor: {newBilling.Valor}</p>");
                message.Append($"<p>Fecha Factura: {newBilling.Fechafactura.ToLongDateString()}</p>");
                message.Append($"<p>Fecha Límite: {newBilling.Fechalimite.ToLongDateString()}</p>");
                message.Append($"<p>Por favor actualizar el estado de la factura antes de {newBilling.Diasaprobación}</p>");
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

        private string GetSubjectFinish(Billing billing)
        {
            throw new NotImplementedException();
        }

        private VW_BillingData GetBillingByNumber(int numberBilling)
        {
            StringBuilder sql = new StringBuilder();

            sql.Append("SELECT * ");
            sql.Append("FROM VW_BILLING_DATA ");
            sql.Append($"WHERE ESTADOID = {(int)EnumStatusBilling.ProcesoArobacion} AND ");
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
