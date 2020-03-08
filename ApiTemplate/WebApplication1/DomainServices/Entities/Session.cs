using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.DomainServices.Entities
{
    public class Session
    {
        public string UserName { get; set; }
        public string RoleName { get; set; }
    }

    public class Account
    {
        public Person Person { get; set; }
        public IEnumerable<Menu> Menus { get; set; }
    }


}
