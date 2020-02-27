using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.DomainServices.Entities
{
    public class Company : EntityBase
    {
        public string BusinessName { get; set; }
        public string Logo { get; set; }
        public string Nit { get; set; }
        public string EmailCompany { get; set; }
        public string EmailTreasury { get; set; }
        public bool AccountableInterface { get; set; }
        public bool PurchaseOrders { get; set; }
    }
}
