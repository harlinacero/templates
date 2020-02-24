using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.DataAccess.Repository;
using WebApplication1.DomainServices.Contracts;
using WebApplication1.DomainServices.Entities;
using WebApplication1.Models;

namespace WebApplication1.DomainServices
{
    public class AdminDomainService : IAdminDomainService
    {
        #region Fields
        private readonly IRepository<Person> _personRepo;
        private readonly IRepository<Role> _roleRepo;
        private readonly IRepository<DocumentType> _documentRepo;
        #endregion

        #region Builder
        public AdminDomainService(IRepository<Person> personRepo, IRepository<Role> roleRepo, IRepository<DocumentType> documentRepo)
        {
            _personRepo = personRepo;
            _roleRepo = roleRepo;
            _documentRepo = documentRepo;
        }
        #endregion


        #region Person
        public RequestResult<IEnumerable<Person>> GetAllPerson()
        {
            var list = _personRepo.ListAll();
            return RequestResult<IEnumerable<Person>>.CreateSuccesfull(list);
        }


        public RequestResult<Person> GetPersonById(int Id)
        {
            var person = _personRepo.GetById(Id);
            if (person != null)
            {
                return RequestResult<Person>.CreateSuccesfull(person);
            }
            return RequestResult<Person>.CreateUnSuccesfull("No se encontró el valor indicado");
        }

        public RequestResult<Person> SavePerson(Person person)
        {
            var personEntity = _personRepo.GetById(person.Id);
            if (personEntity != null)
                return UpdatePerson(person);

            return AddPerson(person);
        }

        private RequestResult<Person> AddPerson(Person person)
        {
            if (_personRepo.Add(person))
                return RequestResult<Person>.CreateSuccesfull(person);
            return RequestResult<Person>.CreateUnSuccesfull("No se pudo crear");
        }

        private RequestResult<Person> UpdatePerson(Person person)
        {
            if (_personRepo.Update(person))
                return RequestResult<Person>.CreateSuccesfull(person);
            return RequestResult<Person>.CreateUnSuccesfull("No se pudo actualizar");
        }

        #endregion


        #region RoleGroup
        public RequestResult<IEnumerable<Role>> GetAllRole()
        {
            var list = _roleRepo.ListAll();
            return RequestResult<IEnumerable<Role>>.CreateSuccesfull(list);
        }


        public RequestResult<Role> GetRoleById(int Id)
        {
            var role = _roleRepo.GetById(Id);
            if (role != null)
            {
                return RequestResult<Role>.CreateSuccesfull(role);
            }
            return RequestResult<Role>.CreateUnSuccesfull("No se encontró el valor indicado");
        }

        public RequestResult<Role> SaveRole(Role role)
        {
            var roleEntity = _roleRepo.GetById(role.Id);
            if (roleEntity != null)
                return UpdateRole(role);

            return Addrole(role);
        }

        public RequestResult<IEnumerable<DocumentType>> GetDocumentTypes()
        {
            var list = _documentRepo.ListAll();
            return RequestResult<IEnumerable<DocumentType>>.CreateSuccesfull(list);
        }



        private RequestResult<Role> UpdateRole(Role role)
        {
            if (_roleRepo.Update(role))
                return RequestResult<Role>.CreateSuccesfull(role);
            return RequestResult<Role>.CreateUnSuccesfull("No se pudo crear");
        }

        private RequestResult<Role> Addrole(Role role)
        {
            if (_roleRepo.Add(role))
                return RequestResult<Role>.CreateSuccesfull(role);
            return RequestResult<Role>.CreateUnSuccesfull("No se pudo crear");
        }




        #endregion
    }
}
