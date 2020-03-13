using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.DomainServices.Entities
{
    public class Billing : EntityBase
    {
        public int NumberBilling { get; set; }
        public int ProviderId { get; set; }
        public int BillingType { get; set; }
        public int ProductType { get; set; }
        public int CostcenterId { get; set; }
        public double ExchangeRate { get; set; }
        public DateTime DateBilling { get; set; }
        public DateTime DateLimit { get; set; }
        public DateTime DateFiled { get; set; }
        public double ValueBill { get; set; }
        public DateTime DateCreated { get; set; }
        public int Stateid { get; set; }
        public DateTime DateAprovalRejection { get; set; }
        public string CasueRejection { get; set; }
        public int UserRejection { get; set; }
        public string RouteFile { get; set; }
    }
}
