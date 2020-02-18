using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.DataAccess.Context;

namespace WebApplication1.DataAccess
{
    public class DbClient : IDbClient, IDisposable
    {
        private string _connectionString;
        public DbClient(string connectionString)
        {
            _connectionString = connectionString;
        }
        public void Dispose()
        {
            throw new NotImplementedException();
        }
    }
}
