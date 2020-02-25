
using System.Collections.Generic;
using WebApplication1.DataAccess.Repository;
using WebApplication1.DomainServices.Contracts;
using WebApplication1.DomainServices.Entities;
using WebApplication1.Models;

namespace WebApplication1.DomainServices
{
    public class ProviderDomainService : IProviderDomainService
    {
        #region Fields
        private readonly IRepository<Provider> _providerRepo;
        #endregion

        #region Builder
        public ProviderDomainService(IRepository<Provider> providerRepo)
        {
            _providerRepo = providerRepo;
        }
        public RequestResult<IEnumerable<Provider>> GetAllProviders()
        {
            var list = _providerRepo.ListAll();
            return RequestResult<IEnumerable<Provider>>.CreateSuccesfull(list);
        }

        public RequestResult<Provider> GetProviderById(int id)
        {
            var provider = _providerRepo.GetById(id);
            if (provider != null)
            {
                return RequestResult<Provider>.CreateSuccesfull(provider);
            }
            return RequestResult<Provider>.CreateUnSuccesfull("No se encontró el valor indicado");
        }

        public RequestResult<Provider> SaveProvider(Provider provider)
        {
            var providerEntity = _providerRepo.GetById(provider.Id);
            if (providerEntity != null)
                return UpdateProvider(provider);

            return AddProvider(provider);
        }


        private RequestResult<Provider> UpdateProvider(Provider provider)
        {
            if (_providerRepo.Update(provider))
                return RequestResult<Provider>.CreateSuccesfull(provider);
            return RequestResult<Provider>.CreateUnSuccesfull("No se pudo actualizar");
        }

        private RequestResult<Provider> AddProvider(Provider provider)
        {
            if (_providerRepo.Add(provider))
                return RequestResult<Provider>.CreateSuccesfull(provider);
            return RequestResult<Provider>.CreateUnSuccesfull("No se pudo crear");
        }

        #endregion
    }
}