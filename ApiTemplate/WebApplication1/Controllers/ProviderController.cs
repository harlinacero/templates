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
    public class ProviderController : Controller
    {
        private readonly IProviderAppService _providerAppService;

        public ProviderController(IProviderAppService providerAppService)
        {
            _providerAppService = providerAppService;
        }

        #region Providers
        /// <summary>
        /// Get all provider
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("GetAllProviders")]
        public RequestResult<IEnumerable<Provider>> GetAllProviders()
        {
            return _providerAppService.GetAllProviders();
        }
        /// <summary>
        /// Update or add provider
        /// </summary>
        /// <param name="provider"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("SaveProvider")]
        public RequestResult<Provider> SaveProvider(Provider provider)
        {
            return _providerAppService.SaveProvider(provider);
        }
        /// <summary>
        /// Get person by Id
        /// </summary>
        /// <param name="Id"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("GetProvider")]
        public RequestResult<Provider> GetProviderById(int Id)
        {
            return _providerAppService.GetProviderById(Id);
        }


        #endregion
    }
}
