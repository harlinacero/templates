using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.DataAccess.Repository;
using WebApplication1.DomainServices.Contracts;
using WebApplication1.DomainServices.Entities;
using WebApplication1.DTOs;
using WebApplication1.Models;

namespace WebApplication1.DomainServices
{
    public class AdminDomainService : IAdminDomainService
    {
        #region Fields
        private readonly IRepository<Person> _personRepo;
        private readonly IRepository<Role> _roleRepo;
        private readonly IRepository<DocumentType> _documentRepo;
        private readonly IRepository<MenuByRole> _menuByRoleRepo;
        private readonly IRepository<Menu> _menuRepo;
        #endregion

        #region Builder
        public AdminDomainService(IRepository<Person> personRepo, IRepository<Role> roleRepo, IRepository<DocumentType> documentRepo, 
            IRepository<MenuByRole> menuByRoleRepo, IRepository<Menu> menuRepo)
        {
            _personRepo = personRepo;
            _roleRepo = roleRepo;
            _documentRepo = documentRepo;
            _menuByRoleRepo = menuByRoleRepo;
            _menuRepo = menuRepo;
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
        public RequestResult<IEnumerable<RoleDTO>> GetAllRole()
        {
            var roles = _roleRepo.ListAll();
            var menus = _menuRepo.ListAll();
            var menusByRoles = _menuByRoleRepo.ListAll();
            List<RoleDTO> rolesDTO = new List<RoleDTO>();

            foreach (var item in roles)
            {
                var menuByRole = (from me in menusByRoles where me.IdRole == item.Id select me).ToList();
                var roleDTO = new RoleDTO()
                {
                    Role = item,
                    MenuByRole = menuByRole,
                    Menus = menus
                };

                rolesDTO.Add(roleDTO);
            }


            return RequestResult<IEnumerable<RoleDTO>>.CreateSuccesfull(rolesDTO);
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

        public RequestResult<Role> SaveRole(Role role, IEnumerable<Menu> menus)
        {
            var roleEntity = _roleRepo.GetById(role.Id);
            if (roleEntity != null)
                return UpdateRole(role, menus);

            return Addrole(role, menus);
        }




        private RequestResult<Role> UpdateRole(Role role, IEnumerable<Menu> menus)
        {
            if (_roleRepo.Update(role))
            {
                SaveMenusByRole(role, menus);
                return RequestResult<Role>.CreateSuccesfull(role);
            }
            return RequestResult<Role>.CreateUnSuccesfull("No se pudo crear");
        }

        private RequestResult<Role> Addrole(Role role, IEnumerable<Menu> menus)
        {
            var newRole = _roleRepo.AddWithReturn(role);
            if (newRole != null)
            {
                SaveMenusByRole(newRole, menus);
                return RequestResult<Role>.CreateSuccesfull(role);
            }
            return RequestResult<Role>.CreateUnSuccesfull("No se pudo crear");
        }

        private void SaveMenusByRole(Role role, IEnumerable<Menu> menus)
        {
            MenuByRole men = new MenuByRole();
            _menuByRoleRepo.RemoveByWhere(men, $"{nameof(MenuByRole.IdRole)} = {role.Id}");
            foreach (var menu in menus)
            {
                MenuByRole newMenuByRol = new MenuByRole()
                {
                    IdRole = role.Id,
                    IdMenu = menu.Id
                };

                _menuByRoleRepo.Add(newMenuByRol);
            }
        }



        public RequestResult<IEnumerable<DocumentType>> GetDocumentTypes()
        {
            var list = _documentRepo.ListAll();
            return RequestResult<IEnumerable<DocumentType>>.CreateSuccesfull(list);
        }


        #endregion
    }
}
