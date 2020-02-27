using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.DomainServices.Entities
{
    public class CostCenter : EntityBase
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public int Companyid { get; set; }
    }
}
