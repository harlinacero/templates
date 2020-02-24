using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.DomainServices.Entities
{
    public class DocumentType: EntityBase
    {
        public string Resume { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
    }
}
