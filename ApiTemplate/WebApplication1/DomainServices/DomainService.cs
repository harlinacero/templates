using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.DataAccess;
using WebApplication1.DomainServices.Contracts;

namespace WebApplication1.DomainServices
{
    public abstract class DomainService : IDomainService, IDisposable
    {
        protected DomainService() { }
        public void Dispose() { }

        public void SetContext(IDbContext context)
        {
            
        }
    }
}
