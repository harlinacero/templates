using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.DomainServices.Entities;

namespace WebApplication1.DTOs
{
    public class RoleDTO : DTOBase
    {
        public Role Role { get; set; }
        public IEnumerable<Menu> Menus { get; set; }
        public IEnumerable<MenuByRole> MenuByRole { get; set; }
    }
}
