using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApplication1.DataAccess;
using WebApplication1.DataAccess.Context;
using WebApplication1.DataAccess.Repository;
using WebApplication1.DomainServices.Contracts;
using WebApplication1.DomainServices.Entities;
using WebApplication1.Helpers;
using WebApplication1.Models;

namespace WebApplication1.DomainServices
{
    public class SessionDomainService : ISessionDomainService
    {


        private readonly IRepository<Role> _roleRepo;
        private readonly IRepository<Person> _personRepo;
        private readonly IRepository<Menu> _menuRepo;
        private readonly IRepository<MenuByRole> _menuByRoleRepo;
        private readonly IRepository<Company> _companyRepo;
        private readonly IRepository<Recovery> _recoveryRepo;
        public SessionDomainService(IRepository<Role> roleRepo, IRepository<Person> personRepo, IRepository<Menu> menuRepo, IRepository<MenuByRole> menuByRoleRepo,
            IRepository<Company> companyRepo, IRepository<Recovery> recoveryRepo)
        {
            _roleRepo = roleRepo;
            _personRepo = personRepo;
            _menuRepo = menuRepo;
            _menuByRoleRepo = menuByRoleRepo;
            _companyRepo = companyRepo;
            _recoveryRepo = recoveryRepo;
        }


        public RequestResult<Account> Login(Login login)
        {

            var where = $"{nameof(Person.DocumentNumber)} = '{login.UserName}'";
            var account = _personRepo.ListByWhere(where).FirstOrDefault();

            if (account == null)
                return RequestResult<Account>.CreateUnSuccesfull("El usuario no existe");

            if (account.Password != login.Password)
                return RequestResult<Account>.CreateUnSuccesfull("El usuario y la cotraseña no coinciden");

            var menusByRol = _menuByRoleRepo.ListByWhere($"{nameof(MenuByRole.IdRole)} = {account.RoleId}");
            var indexes = string.Join(",", (from me in menusByRol select me.IdMenu).ToList());
            var menus = _menuRepo.ListByWhere($"{nameof(Menu.Id)} IN ({indexes})").ToList();

            if (menus.Count <= 0)
                return RequestResult<Account>.CreateUnSuccesfull("El usuario no tiene acceso permitido");

            var session = new Account()
            {
                Person = account,
                Menus = menus
            };

            return RequestResult<Account>.CreateSuccesfull(session);
        }

        public RequestResult<string> SendEmail(string email)
        {
            var where = $"{nameof(Person.Email)} = '{email}'";
            var account = _personRepo.ListByWhere(where).FirstOrDefault();

            if (account != null)
            {
                return GenerateCode(account);
            }

            return RequestResult<string>.CreateUnSuccesfull("El correo electrónico no fue encontrado");

        }

        public RequestResult<string> RestorePassword(string code, string password)
        {
            DeleteOldCodes(new Recovery());
            var recovery = _recoveryRepo.ListByWhere($"{nameof(Recovery.Code)} = '{Encrypt.Base64Decode(code)}'").FirstOrDefault();
            if (recovery != null)
            {
                var person = _personRepo.ListByWhere($"{nameof(Person.Id)} = {recovery.IdPerson}").FirstOrDefault();
                person.Password = password;
                var update = _personRepo.Update(person);
                if (update)
                {
                    return RequestResult<string>.CreateSuccesfull("La contraseña ha sido actualizada");
                }
                else
                {
                    return RequestResult<string>.CreateUnSuccesfull("La contraseña no pudo ser actualizada");
                }
            }
            else
            {
                return RequestResult<string>.CreateUnSuccesfull("El código no existe o ya está vencido");
            }
        }


        private RequestResult<string> GenerateCode(Person account)
        {
            Random random = new Random();
            var code = random.Next(10000, 100000);
            var recovery = _recoveryRepo.AddWithReturn(new Recovery()
            {
                Code = code.ToString(),
                DateModified = DateTime.Now,
                Email = account.Email,
                IdPerson = account.Id,
                UserChange = 0
            });

            DeleteOldCodes(recovery);

            if (recovery != null)
            {
                return SendCodeToEmail(account, recovery.Code);
            }

            return RequestResult<string>.CreateUnSuccesfull("El código no pudo ser generado");

        }


        private void DeleteOldCodes(Recovery recovery)
        {
            var current = DateTime.Now.AddMinutes(-5);
            string where = $"DATE_PART('minute', TO_TIMESTAMP('{current}', 'DD/MM/YYYY HH:MI') - DateModified::timestamp ) > 5";
            _recoveryRepo.RemoveByWhere(recovery, where);
        }

        private RequestResult<string> SendCodeToEmail(Person account, string code)
        {
            var company = _companyRepo.ListAll().FirstOrDefault();
            var from = (company != null) ? company.EmailMistica : "harlinacero@gmail.com";
            var password = (company != null) ? company.PasswordMistica : "h4rl1n4cer0";
            string subject = CreateSubject("Success");
            string bodyMessage = CreateBody("Success", account, code);
            Mail.SendEmail(company, account.Email, subject, bodyMessage);
            return RequestResult<string>.CreateSuccesfull("Código enviado");
        }


        private string CreateBody(string type, Person account, string code)
        {
            StringBuilder body = new StringBuilder();
            body.Append("<h1>Mistica Software - Recuperación de contraseñas</h1>");
            body.Append($"<p>Señor(a) {account.FirstName} {account.LastName} </p>");
            body.Append($"<p>Se ha detectado un intento para restablecer su contraseña, si ha sido usted");
            body.Append($"por favor digite el siguiente codigo cuando se le indique.</p><br>");
            body.Append($"Codigo: <h3>{code}</h3>");
            body.Append($"<br><span>Este código tiene vigencia de 5 minutos</span>");
            body.Append($"<br><p>Si no ha sido usted, por favor ignore este correo.</p>");
            return body.ToString();
        }

        private string CreateSubject(string type)
        {
            switch (type)
            {
                case "Success":
                    return "Recuperación de contraseña - Mística Software";
                case "Error":
                    return "El correo no fue encontrado";
            }

            return "";
        }

        
    }

}
