using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.DomainServices.Entities
{
    public class AprovalBillingProcess : EntityBase
    {
        public int Billingid { get; set; }
        public int LevelAproval { get; set; }
        public int PersonAprovalId { get; set; }
        public DateTime DateRequest { get; set; }
        public DateTime DateChange { get; set; }
        public int Statusid { get; set; }
        public string Observations { get; set; }
    }
}
