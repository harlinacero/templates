using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.IO;
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
        public BillingDomainService(IRepository<Billing> billingRepo, IRepository<Status> stateRepo, IRepository<TypeBilling> typeBilingRepo, IHostingEnvironment env)
        {
            _billingRepo = billingRepo;
            _stateRepo = stateRepo;
            _typeBilingRepo = typeBilingRepo;
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

                    var billingEntity = _billingRepo.GetById(billing.Id);
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
                Mail.SendEmail("harlinacero@gmail.com", "harferace@hotmail.com", "h4rl1n4cer0", "Prueba email", "amdsfamdsfamdfasdmfasmdfasmdf");
                return RequestResult<Billing>.CreateSuccesfull(billing);
            }

            File.Delete(newPath);
            return RequestResult<Billing>.CreateUnSuccesfull("No se pudo crear");
        }

        private RequestResult<Billing> UpdateBilling(Billing billing)
        {
            if (_billingRepo.Update(billing))
                return RequestResult<Billing>.CreateSuccesfull(billing);
            return RequestResult<Billing>.CreateUnSuccesfull("No se pudo actualizar");
        }


        /// <summary>
        /// Verify if the temp file exist, else, it create
        /// </summary>
        /// <param name="file"></param>
        /// <param name="fileTempPath"></param>
        private void VerifyExistFile(IFormFile file, string fileTempPath)
        {
            if (!File.Exists(fileTempPath))
            {
                // This statement ensures that the file is created,but the handle is not kept.
                using (FileStream fs = File.Create(fileTempPath)) { }
                using (var stream = new FileStream(fileTempPath, FileMode.Create))
                {
                    file.CopyTo(stream);
                }
            }
        }
    }
}
