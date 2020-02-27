using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.DataAccess.Repository;
using WebApplication1.DomainServices.Contracts;
using WebApplication1.DomainServices.Entities;
using WebApplication1.Models;

namespace WebApplication1.DomainServices
{
    public class CompanyDomainService : ICompanyDomainService
    {
        #region Fields
        private readonly IRepository<Company> _companyRepo;
        private readonly IRepository<CostCenter> _costCenterRepo;
        #endregion

        #region Builder
        public CompanyDomainService(IRepository<Company> companyRepo, IRepository<CostCenter> costCenterRepo)
        {
            _companyRepo = companyRepo;
            _costCenterRepo = costCenterRepo;
        }
        #endregion

        #region Public Methods      
        public RequestResult<Company> GetCompany()
        {
            var company = _companyRepo.ListAll().FirstOrDefault();
            return RequestResult<Company>.CreateSuccesfull(company);
        }

        public RequestResult<Company> SaveCompany(Company company)
        {
            var oldCompany = _companyRepo.GetById(company.Id);
            if (oldCompany != null)
                return UpdateCompany(company);

            return AddCompany(company);
        }



        public RequestResult<IEnumerable<CostCenter>> GetAllCostCenter()
        {
            var costCenter = _costCenterRepo.ListAll();
            return RequestResult<IEnumerable<CostCenter>>.CreateSuccesfull(costCenter);
        }


        public RequestResult<CostCenter> GetCostCenterById(int id)
        {
            var company = _costCenterRepo.GetById(id);
            if (company != null)
            {
                return RequestResult<CostCenter>.CreateSuccesfull(company);
            }
            return RequestResult<CostCenter>.CreateUnSuccesfull("No se encontró el valor indicado");
        }



        public RequestResult<CostCenter> SaveCostCenter(CostCenter costCenter)
        {
            var oldCompany = _companyRepo.GetById(company.Id);
            if (oldCompany != null)
                return UpdateCompany(company);

            return AddCompany(company);
        }



        #endregion


        #region Private methods
        private RequestResult<Company> AddCompany(Company company)
        {
            if (_companyRepo.Add(company))
                return RequestResult<Company>.CreateSuccesfull(company);
            return RequestResult<Company>.CreateUnSuccesfull("No se pudo crear");
        }

        private RequestResult<Company> UpdateCompany(Company company)
        {
            if (_companyRepo.Update(company))
                return RequestResult<Company>.CreateSuccesfull(company);
            return RequestResult<Company>.CreateUnSuccesfull("No se pudo actualizar");
        }

        #endregion


    }
}
