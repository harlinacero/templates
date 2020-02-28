using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.AppServices.Contrracts;
using WebApplication1.DomainServices.Contracts;
using WebApplication1.DomainServices.Entities;
using WebApplication1.Models;

namespace WebApplication1.AppServices
{
    public class CompanyAppService : ICompanyAppService
    {

        private readonly ICompanyDomainService _companyDomainService;

        public CompanyAppService(ICompanyDomainService companyDomainService)
        {
            _companyDomainService = companyDomainService;
        }

        public RequestResult<Company> GetCompany()
        {
            try
            {
                return _companyDomainService.GetCompany();
            }
            catch (Exception ex)
            {
                return RequestResult<Company>.CreateUnSuccesfull(ex.Message);
            }
        }



        public RequestResult<Company> SaveCompany(Company company)
        {
            try
            {
                return _companyDomainService.SaveCompany(company);
            }
            catch (Exception ex)
            {
                return RequestResult<Company>.CreateUnSuccesfull(ex.Message);
            }
        }

        public RequestResult<IEnumerable<CostCenter>> GetAllCostCenter()
        {
            try
            {
                return _companyDomainService.GetAllCostCenter();
            }
            catch (Exception ex)
            {
                return RequestResult<IEnumerable<CostCenter>>.CreateUnSuccesfull(ex.Message);
            }
        }

        public RequestResult<CostCenter> GetCostCenterById(int id)
        {
            try
            {
                return _companyDomainService.GetCostCenterById(id);
            }
            catch (Exception ex)
            {
                return RequestResult<CostCenter>.CreateUnSuccesfull(ex.Message);
            }
        }

        public RequestResult<CostCenter> SaveCostCenter(CostCenter costCenter)
        {
            try
            {
                return _companyDomainService.SaveCostCenter(costCenter);
            }
            catch (Exception ex)
            {
                return RequestResult<CostCenter>.CreateUnSuccesfull(ex.Message);
            }
        }
    }
}
