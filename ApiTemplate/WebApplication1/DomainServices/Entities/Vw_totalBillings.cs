using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.DomainServices.Entities
{
    public class Vw_totalBillings : EntityBase
    {
        public string Name { get; set; }
        public long Numero { get; set; }
        public double Total { get; set; }
    }

    public class Vw_total_billing_by_month: EntityBase
    {
        public string Month { get; set; }
        public long Total { get; set; }
    }

    public class Vw_total_billing_by_status : EntityBase
    {
        public string Estadoaprobacion { get; set; }
        public string Costcenter { get; set; }
        public long Numer { get; set; }
    }
}
