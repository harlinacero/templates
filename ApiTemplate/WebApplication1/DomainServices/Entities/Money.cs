using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.DomainServices.Entities
{
    public class Money : EntityBase
    {
        public string Country { get; set; }
        public string Unitymoney { get; set; }
        public string Symbol { get; set; }
        public string Code { get; set; }
    }
}
