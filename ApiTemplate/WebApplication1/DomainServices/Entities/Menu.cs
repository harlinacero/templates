using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.DomainServices.Entities
{
    public class Menu : EntityBase
    {
        public string Icon { get; set; }
        public string Name { get; set; }
        public string Component { get; set; }
    }

    public class MenuByRole : EntityBase
    {        
        public int IdRole { get; set; }
        public int IdMenu { get; set; }
    }
}
