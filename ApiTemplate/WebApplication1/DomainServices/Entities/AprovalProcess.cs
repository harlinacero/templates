using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.DomainServices.Entities
{
    public class AprovalProcess : EntityBase
    {
        public int Billingid { get; set; }
        public DateTime Daterequest { get; set; }
        public DateTime Dateaproval { get; set; }
        public int Totaldays { get; set; }
        public int Statusid { get; set; }
        public string Comments { get; set; }
    }
}
