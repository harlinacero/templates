using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.DomainServices.Entities;
using WebApplication1.Models;

namespace WebApplication1.AppServices.Contrracts
{
    public interface ICompanyAppService
    {
        #region Company

        /// <summary>
        /// Get all roles
        /// </summary>
        /// <returns></returns>
        RequestResult<Company> GetCompany();
        /// <summary>
        /// Update or add role
        /// </summary>
        /// <param name="company"></param>
        /// <returns></returns>
        RequestResult<Company> SaveCompany(Company company);
        #endregion

        #region Company

        /// <summary>
        /// Get all roles
        /// </summary>
        /// <returns></returns>
        RequestResult<IEnumerable<CostCenter>> GetAllCostCenter();
        /// <summary>
        /// Update or add role
        /// </summary>
        /// <param name="costCenter"></param>
        /// <returns></returns>
        RequestResult<CostCenter> SaveCostCenter(CostCenter costCenter);
        /// <summary>
        /// Get cost center by ID
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        RequestResult<CostCenter> GetCostCenterById(int id);
        #endregion

    }
}
