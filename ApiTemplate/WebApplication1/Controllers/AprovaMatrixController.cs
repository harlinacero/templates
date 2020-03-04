using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.AppServices.Contrracts;
using WebApplication1.DomainServices.Entities;
using WebApplication1.DTOs;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AprovaMatrixController : ControllerBase
    {

        private readonly IAprovaMatrixAppService _aprovaMatrixAppService;

        public AprovaMatrixController(IAprovaMatrixAppService aprovaMatrixAppService)
        {
            _aprovaMatrixAppService = aprovaMatrixAppService;
        }

        /// <summary>
        /// GetAllAprovalMatrix with persons
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("GetAllAprovalMatrix")]
        public RequestResult<IEnumerable<AprovalMatrix>> GetAllAprovalMatrix()
        {
            return _aprovaMatrixAppService.GetAllAprovalMatrix();
        }



        /// <summary>
        /// GetAllAprovalMatrix with persons
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("GetAllMoney")]
        public RequestResult<IEnumerable<Money>> GetAllMoney()
        {
            return _aprovaMatrixAppService.GetAllMoney();
        }

        /// <summary>
        /// Update or add person
        /// </summary>
        /// <param name="matrices"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("SaveAprovalMatrix")]
        public RequestResult<IEnumerable<AprovalMatrix>> SaveAprovalMatrix(List<AprovalMatrix> matrices)
        {
            return _aprovaMatrixAppService.SaveAprovalMatrix(matrices);
        }

    }
}
