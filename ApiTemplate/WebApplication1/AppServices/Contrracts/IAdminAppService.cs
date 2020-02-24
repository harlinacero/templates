using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.DomainServices.Entities;
using WebApplication1.Models;

namespace WebApplication1.AppServices.Contrracts
{
    public interface IAdminAppService
    {
        #region Person

        /// <summary>
        /// Get all person
        /// </summary>
        /// <returns></returns>
        RequestResult<IEnumerable<Person>> GetAllPerson();
        /// <summary>
        /// Update or add person
        /// </summary>
        /// <param name="person"></param>
        /// <returns></returns>
        RequestResult<Person> SavePerson(Person person);
        /// <summary>
        /// Get person by Id
        /// </summary>
        /// <param name="Id"></param>
        /// <returns></returns>
        RequestResult<Person> GetPersonById(int Id);

        #endregion

        #region Role
        /// <summary>
        /// Get all roles
        /// </summary>
        /// <returns></returns>
        RequestResult<IEnumerable<Role>> GetAllRole();
        /// <summary>
        /// Update or add role
        /// </summary>
        /// <param name="role"></param>
        /// <returns></returns>
        RequestResult<Role> SaveRole(Role role);
        /// <summary>
        /// Get person by Id
        /// </summary>
        /// <param name="Id"></param>
        /// <returns></returns>
        RequestResult<Role> GetRoleById(int Id);

        RequestResult<IEnumerable<DocumentType>> GetDocumentTypes();
        #endregion

    }
}
