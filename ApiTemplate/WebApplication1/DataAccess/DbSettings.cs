using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.DataAccess
{
    public sealed class DbSettings
    {
        public DbSettings() { }

        public string ConnectionString { get; set; }
    }
}
