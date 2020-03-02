using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.DomainServices.Entities;

namespace WebApplication1.DTOs
{
    public class AprovalMatrixDTO : DTOBase
    {
        public int Productid { get; set; }
        public int CostCenterid { get; set; }
        public int Moneyid { get; set; }
        public double ExangeRate { get; set; }
        public double ValueMax { get; set; }
        public int ApobationLevels { get; set; }
        public double ValueTotal { get; set; }
        public DateTime DateLimit { get; set; }
        public IEnumerable<int> Personss { get; set; }
    }

    
}
