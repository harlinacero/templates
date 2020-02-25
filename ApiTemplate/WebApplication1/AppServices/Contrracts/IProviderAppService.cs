using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.DomainServices.Entities;
using WebApplication1.Models;

namespace WebApplication1.AppServices.Contrracts
{
    public interface IProviderAppService
    {
        RequestResult<IEnumerable<Provider>> GetAllProviders();
        RequestResult<Provider> SaveProvider(Provider provider);
        RequestResult<Provider> GetProviderById(int id);
    }
}
