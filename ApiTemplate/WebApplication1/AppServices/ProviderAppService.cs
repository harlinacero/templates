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
    public class ProviderAppService : IProviderAppService
    {
        private readonly IProviderDomainService _providerDomainService;

        public ProviderAppService(IProviderDomainService providerDomainService)
        {
            _providerDomainService = providerDomainService;
        }


        public RequestResult<IEnumerable<Provider>> GetAllProviders()
        {
            try
            {
                return _providerDomainService.GetAllProviders();
            }
            catch (Exception ex)
            {
                return RequestResult<IEnumerable<Provider>>.CreateUnSuccesfull(ex.Message);
            }
        }

        public RequestResult<Provider> GetProviderById(int id)
        {
            try
            {
                return _providerDomainService.GetProviderById(id);
            }
            catch (Exception ex)
            {
                return RequestResult<Provider>.CreateUnSuccesfull(ex.Message);
            }
        }

        public RequestResult<Provider> SaveProvider(Provider provider)
        {
            try
            {
                return _providerDomainService.SaveProvider(provider);
            }
            catch (Exception ex)
            {
                return RequestResult<Provider>.CreateUnSuccesfull(ex.Message);
            }
        }
    }
}
