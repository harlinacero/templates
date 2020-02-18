using System;
using WebApplication1.DataAccess;

namespace WebApplication1.DomainServices.Contracts
{
    public interface IDomainService : IDisposable
    {
        void SetContext(IDbContext context);
    }
}
