using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.AppServices.Contrracts;
using WebApplication1.DomainServices.Contracts;
using WebApplication1.DomainServices.Entities;
using WebApplication1.Models;

namespace WebApplication1.AppServices
{
    public class AdminAppService : IAdminAppService
    {
        private readonly IAdminDomainService _adminDomainService;

        public AdminAppService(IAdminDomainService adminDomainService)
        {
            _adminDomainService = adminDomainService;
        }


        #region Person

        /// <summary>
        /// Get all person
        /// </summary>
        /// <returns></returns>
        public RequestResult<IEnumerable<Person>> GetAllPerson()
        {
            try
            {
                return _adminDomainService.GetAllPerson();
            }
            catch (Exception ex)
            {
                return RequestResult<IEnumerable<Person>>.CreateUnSuccesfull(ex.Message);
                
            }
        }
        /// <summary>
        /// Update or add person
        /// </summary>
        /// <param name="person"></param>
        /// <returns></returns>
        public RequestResult<Person> SavePerson(Person person)
        {
            try
            {
                return _adminDomainService.SavePerson(person);
            }
            catch (Exception ex)
            {
                return RequestResult<Person>.CreateUnSuccesfull(ex.Message);
            }
        }
        /// <summary>
        /// Get person by Id
        /// </summary>
        /// <param name="Id"></param>
        /// <returns></returns>
        public RequestResult<Person> GetPersonById(int Id)
        {
            try
            {
                return _adminDomainService.GetPersonById(Id);
            }
            catch (Exception ex)
            {
                return RequestResult<Person>.CreateUnSuccesfull(ex.Message);
            }
        }

        #endregion

        #region RoleGroup
        /// <summary>
        /// Get all roles
        /// </summary>
        /// <returns></returns>
        public RequestResult<IEnumerable<Role>> GetAllRole()
        {
            try
            {
                return _adminDomainService.GetAllRole();
            }
            catch (Exception ex )
            {

                return RequestResult<IEnumerable<Role>>.CreateUnSuccesfull(ex.Message);
            }
        }
        /// <summary>
        /// Update or add role
        /// </summary>
        /// <param name="role"></param>
        /// <returns></returns>
        public RequestResult<Role> SaveRole(Role role)
        {
            try
            {
                return _adminDomainService.SaveRole(role);
            }
            catch (Exception ex )
            {
                return RequestResult<Role>.CreateUnSuccesfull(ex.Message);
            }
        }
        /// <summary>
        /// Get person by Id
        /// </summary>
        /// <param name="Id"></param>
        /// <returns></returns>
        public RequestResult<Role> GetRoleById(int Id)
        {
            try
            {
                return _adminDomainService.GetRoleById(Id);
            }
            catch (Exception ex)
            {

                return RequestResult<Role>.CreateUnSuccesfull(ex.Message);
            }
        }

        public RequestResult<IEnumerable<DocumentType>> GetDocumentTypes()
        {
            try
            {
                return _adminDomainService.GetDocumentTypes();
            }
            catch (Exception ex)
            {
                return RequestResult<IEnumerable<DocumentType>>.CreateUnSuccesfull(ex.Message);
            }
        }
        #endregion
    }
}
