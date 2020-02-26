using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.AppServices.Contrracts;
using WebApplication1.DomainServices.Entities;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController: ControllerBase
    {
        private readonly IProductAppService _productAppService;

        public ProductController(IProductAppService productAppService)
        {
            _productAppService = productAppService;
        }

        #region Providers
        /// <summary>
        /// Get all provider
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("GetAllProducts")]
        public RequestResult<IEnumerable<Product>> GetAll()
        {
            return _productAppService.GetAll();
        }
        /// <summary>
        /// Update or add provider
        /// </summary>
        /// <param name="product"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("SaveProduct")]
        public RequestResult<Product> SaveProduct(Product product)
        {
            return _productAppService.SaveProduct(product);
        }
        /// <summary>
        /// Get person by Id
        /// </summary>
        /// <param name="Id"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("GetProduct")]
        public RequestResult<Product> GetProductById(int Id)
        {
            return _productAppService.GetProductById(Id);
        }


        #endregion
    }
}
