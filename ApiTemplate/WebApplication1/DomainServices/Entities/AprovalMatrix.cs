using System;
using System.Collections.Generic;

namespace WebApplication1.DomainServices.Entities
{
    public class AprovalMatrix : EntityBase
    {
        public int Productid { get; set; }
        public int CostCenterid { get; set; }
        public int Moneyid { get; set; }
        public double ExangeRate { get; set; }
        public double ValueMax { get; set; }
        public int ApobationLevels { get; set; }
        public double ValueTotal { get; set; }
        public DateTime DateLimit { get; set; }
    }

    public class AprovalMatrixWithValues : AprovalMatrix
    {
        public string Productcode { get; set; }
        public string ProductDescription { get; set; }
        public string CostCenterName { get; set; }
        public string Money { get; set; }
        public IEnumerable<int> Personss { get; set; }
    }
}
