using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.DomainServices.Entities
{
    public class Provider : EntityBase
    {
        public int Code { get; set; }
        public string BusinessName { get; set; }
        public string Nit { get; set; }
        public int ReqgimenType { get; set; }
        public string EconomyActivity { get; set; }
        public string Address { get; set; }
        public string Contact { get; set; }
        public string Email { get; set; }
    }
}
