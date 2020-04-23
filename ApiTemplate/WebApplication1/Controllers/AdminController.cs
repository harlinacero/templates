using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.AppServices.Contrracts;
using WebApplication1.DomainServices.Entities;
using WebApplication1.DTOs;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {

        private readonly IAdminAppService _adminAppService;

        public AdminController(IAdminAppService adminAppService)
        {
            _adminAppService = adminAppService;
        }


        #region Person

        /// <summary>
        /// Get all person
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("GetAllPerson")]
        public RequestResult<IEnumerable<Person>> GetAllPerson()
        {
            return _adminAppService.GetAllPerson();
        }
        /// <summary>
        /// Update or add person
        /// </summary>
        /// <param name="person"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("SavePerson")]
        public RequestResult<Person> SavePerson(Person person)
        {
            return _adminAppService.SavePerson(person);
        }
        /// <summary>
        /// Get person by Id
        /// </summary>
        /// <param name="Id"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("GetPerson")]
        public RequestResult<Person> GetPersonById(int Id)
        {
            return _adminAppService.GetPersonById(Id);
        }

        #endregion

        #region RoleGroup
        /// <summary>
        /// Get all roles
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("GetAllRole")]
        public RequestResult<IEnumerable<RoleDTO>> GetAllRole()
        {
            return _adminAppService.GetAllRole();
        }
        /// <summary>
        /// Update or add role
        /// </summary>
        /// <param name="role"></param>
        /// <param name="menus"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("SaveRole")]
        public RequestResult<Role> SaveRole(RoleDTO role)
        {
            return _adminAppService.SaveRole(role);
        }
        /// <summary>
        /// Get person by Id
        /// </summary>
        /// <param name="Id"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("GetRoles")]
        public RequestResult<Role> GetRoleById(int Id)
        {
            return _adminAppService.GetRoleById(Id);
        }
        #endregion

        #region Document type

        [HttpGet]
        [Route("GetDocumentTypes")]
        public RequestResult<IEnumerable<DocumentType>> GetDocumentTypes()
        {
            return _adminAppService.GetDocumentTypes();
        }
        #endregion

        

    }
}
