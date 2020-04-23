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
        private readonly IRepository<MenuByRole> _menuByRoleRepo;

        public SessionDomainService(IRepository<Role> roleRepo, IRepository<Person> personRepo, IRepository<Menu> menuRepo, IRepository<MenuByRole> menuByRoleRepo)
        {
            _roleRepo = roleRepo;
            _personRepo = personRepo;
            _menuRepo = menuRepo;
            _menuByRoleRepo = menuByRoleRepo;
        }


        public RequestResult<Account> Login(Login login)
        {

            var where = $"{nameof(Person.DocumentNumber)} = '{login.UserName}'";
            var account = _personRepo.ListByWhere(where).FirstOrDefault();
            var menusByRol = _menuByRoleRepo.ListByWhere($"{nameof(MenuByRole.IdRole)} = {account.RoleId}");
            var indexes = string.Join(",", (from me in menusByRol select me.IdMenu).ToList());
            var menus = _menuRepo.ListByWhere($"{nameof(Menu.Id)} IN ({indexes})").ToList();

            if (account == null)
                return RequestResult<Account>.CreateUnSuccesfull("El usuario no existe");

            if (account.Password != login.Password)
                return RequestResult<Account>.CreateUnSuccesfull("El usuario y la cotraseña no coinciden");

            if (menus.Count <= 0)
                return RequestResult<Account>.CreateUnSuccesfull("El usuario no tiene acceso permitido");

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
