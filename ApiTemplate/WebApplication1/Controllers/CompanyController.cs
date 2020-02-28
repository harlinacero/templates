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
    public class CompanyController : ControllerBase
    {

        private readonly ICompanyAppService _companyAppService;

        public CompanyController(ICompanyAppService companyAppService)
        {
            _companyAppService = companyAppService;
        }

        #region Company

        /// <summary>
        /// Get all roles
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("GetCompany")]
        public RequestResult<Company> GetCompany()
        {
            return _companyAppService.GetCompany();
        }
        /// <summary>
        /// Update or add role
        /// </summary>
        /// <param name="company"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("SaveCompany")]
        public RequestResult<Company> SaveCompany(Company company)
        {
            return _companyAppService.SaveCompany(company);
        }
        #endregion

        #region Company

        /// <summary>
        /// Get all roles
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("GetAllCostCenter")]
        public RequestResult<IEnumerable<CostCenter>> GetAllCostCenter()
        {
            return _companyAppService.GetAllCostCenter();
        }
        /// <summary>
        /// Update or add role
        /// </summary>
        /// <param name="costCenter"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("SaveCostCenter")]
        public RequestResult<CostCenter> SaveCostCenter(CostCenter costCenter)
        {
            return _companyAppService.SaveCostCenter(costCenter);
        }
        /// <summary>
        /// Get cost center by ID
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("GetCostCenterById")]
        public RequestResult<CostCenter> GetCostCenterById(int id)
        {
            return _companyAppService.GetCostCenterById(id);
        }
        #endregion
    }
}
