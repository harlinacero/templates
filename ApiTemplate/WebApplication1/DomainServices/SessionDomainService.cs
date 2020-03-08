using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.DataAccess;
using WebApplication1.DataAccess.Context;
using WebApplication1.DataAccess.Repository;
using WebApplication1.DomainServices.Contracts;
using WebApplication1.DomainServices.Entities;
using WebApplication1.Models;

namespace WebApplication1.DomainServices
{
    public class SessionDomainService : ISessionDomainService
    {


        private readonly IRepository<Role> _roleRepo;
        private readonly IRepository<Person> _personRepo;
        private readonly IRepository<Menu> _menuRepo;

        public SessionDomainService(IRepository<Role> roleRepo, IRepository<Person> personRepo, IRepository<Menu> menuRepo)
        {
            _roleRepo = roleRepo;
            _personRepo = personRepo;
            _menuRepo = menuRepo;
        }


        public RequestResult<Account> Login(Login login)
        {

            var where = $"{nameof(Person.DocumentNumber)} = '{login.UserName}'";
            var account = _personRepo.ListByWhere(where).FirstOrDefault();
            var menus = _menuRepo.ListAll();
            if (account == null)
                return RequestResult<Account>.CreateUnSuccesfull("El usuario no existe");

            if (account.Password != login.Password)
                return RequestResult<Account>.CreateUnSuccesfull("El usuario y la cotraseña no coinciden");


            //List<Menu> menus = new List<Menu>()
            //{
            //    new Menu
            //    {
            //        Icon = "fa fa-home",
            //        Component  ="/home",
            //        Name = "Inicio"
            //    },

            //    new Menu
            //    {
            //        Icon = "fa fa-file-text-o",
            //        Name  ="Gestión de Facturas",
            //        Component = "/billing"
            //    },

            //    new Menu
            //    {
            //        Icon = "fa fa-home",
            //        Name= "Inicio",
            //        Component = "/home"
            //    }
            //};
            //        {  },
            //{ icon: "fa fa-file-text-o", name: "Gestión de Facturas", component: "/billing" },
            //{ icon: "fa fa-shopping-cart", name: "Órdenes de Compra", component: "/shopping" },
            //{ icon: "fa fa-users", name: "Administración", component: "/admin" },
            //{ icon: "fa fa-line-chart", name: "Informes", component: "/reports" },
            //{ icon: "fa fa-cog", name: "Configuración", component: "/settings" }
            
            var session = new Account()
            {
                Person = account,
                Menus = menus
            };

            return RequestResult<Account>.CreateSuccesfull(session);
        }


        public static string Base64Decode(string base64EncodedData)
        {
            var base64EncodedBytes = System.Convert.FromBase64String(base64EncodedData);
            return System.Text.Encoding.UTF8.GetString(base64EncodedBytes);
        }
    }

}
