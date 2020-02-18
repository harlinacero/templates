using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.DataAccess;

namespace WebApplication1.AppServices
{
    public abstract class AppService
    {
        private IDbContext _context;
        public AppService(IDbContext context)
        {
            _context = context;
        }

        public IDbContext Context { get; }
    }
}
