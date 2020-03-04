using System;
using System.Collections.Generic;

namespace WebApplication1.DomainServices.Entities
{
    public class AprovalMatrix : EntityBase
    {
        public int CostCenterId { get; set; }
        public int PersonId { get; set; }
        public int LevelAprobation { get; set; }
        public double ValueMin { get; set; }
        public double ValueMax { get; set; }
        public int DaysToAprobate { get; set; }
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
