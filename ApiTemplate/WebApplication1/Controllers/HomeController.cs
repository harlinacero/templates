using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.AppServices.Contrracts;
using WebApplication1.DomainServices.Entities;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : Controller
    {
        private readonly IHomeAppService _homeAppService;

        public HomeController(IHomeAppService homeAppService)
        {
            _homeAppService = homeAppService;
        }

        /// <summary>
        /// Get all billing
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("GetAllIndicators")]
        public RequestResult<IEnumerable<Vw_totalBillings>> GetAllIndicators()
        {
            return _homeAppService.GetAllIndicators();
        }

        
        /// <summary>
        /// Get all billing
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("GetAllBillingsByMonth")]
        public RequestResult<IEnumerable<Vw_total_billing_by_month>> GetAllBillingsByMonth()
        {
            return _homeAppService.GetAllBillingsByMonth();
        }

        /// <summary>
        /// Get all billing
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("GetAllBillingsByStatus")]
        public RequestResult<IEnumerable<Vw_total_billing_by_status>> GetAllBillingsByStatus()
        {
            return _homeAppService.GetAllBillingsByStatus();
        }
    }
}
