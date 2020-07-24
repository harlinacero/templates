using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.DomainServices.Entities
{
    public class Recovery : EntityBase
    {
        public string Email { get; set; }
        public string Code { get; set; }
        public int IdPerson { get; set; }
    }
}
