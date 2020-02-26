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
    public class ProductDomainService : IProductDomainService
    {
        #region Fields
        private readonly IRepository<Product> _productRepo;
        #endregion

        #region Builder
        public ProductDomainService(IRepository<Product> productRepo)
        {
            _productRepo = productRepo;
        }

        #endregion

        #region Public Methods

       

        public RequestResult<IEnumerable<Product>> GetAll()
        {
            var list = _productRepo.ListAll();
            return RequestResult<IEnumerable<Product>>.CreateSuccesfull(list);
        }

        public RequestResult<Product> GetProductById(int id)
        {
            var product = _productRepo.GetById(id);
            if (product != null)
            {
                return RequestResult<Product>.CreateSuccesfull(product);
            }
            return RequestResult<Product>.CreateUnSuccesfull("No se encontró el valor indicado");
        }

        public RequestResult<Product> SaveProduct(Product product)
        {
            var productEntity = _productRepo.GetById(product.Id);
            if (productEntity != null)
                return UpdateProduct(product);

            return AddProduct(product);
        }

        #endregion

        #region Private Methods

        private RequestResult<Product> AddProduct(Product product)
        {
            if (_productRepo.Add(product))
                return RequestResult<Product>.CreateSuccesfull(product);
            return RequestResult<Product>.CreateUnSuccesfull("No se pudo crear");
        }

        /// <summary>
        /// Update 
        /// </summary>
        /// <param name="product"></param>
        /// <returns></returns>
        private RequestResult<Product> UpdateProduct(Product product)
        {
            if (_productRepo.Update(product))
                return RequestResult<Product>.CreateSuccesfull(product);
            return RequestResult<Product>.CreateUnSuccesfull("No se pudo actualizar");
        }
        #endregion

    }
}
