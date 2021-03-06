﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.DomainServices.Entities;
using WebApplication1.Models;

namespace WebApplication1.DomainServices.Contracts
{
    public interface IProviderDomainService
    {
        RequestResult<IEnumerable<Provider>> GetAllProviders();
        RequestResult<Provider> GetProviderById(int id);
        RequestResult<Provider> SaveProvider(Provider provider);
    }
}
