using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.DomainServices.Entities
{
    public class AprobalMatrixUsers: EntityBase
    {
        public int AprovalMatrixId { get; set; }
        public int Personid { get;set; }
    }
}
