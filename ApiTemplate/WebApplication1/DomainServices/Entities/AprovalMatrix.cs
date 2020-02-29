using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.DomainServices.Entities
{
    public class AprovalMatrix : EntityBase
    {
        public int Productid { get; set; }
        public int CostCenterid { get; set; }
        public int Moneyid { get; set; }
        public float ExangeRate { get; set; }
        public float ValueMax { get; set; }
        public int ApobationLevels { get; set; }
        public float ValueTotal { get; set; }
    }
}
