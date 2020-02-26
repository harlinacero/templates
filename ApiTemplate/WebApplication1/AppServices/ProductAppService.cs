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
    public class ProductAppService : IProductAppService
    {
        private readonly IProductDomainService _productDomainService;

        public ProductAppService(IProductDomainService productDomainService)
        {
            _productDomainService = productDomainService;
        }


        public RequestResult<IEnumerable<Product>> GetAll()
        {
            try
            {
                return _productDomainService.GetAll();
            }
            catch (Exception ex)
            {
                return RequestResult<IEnumerable<Product>>.CreateUnSuccesfull(ex.Message);
            }
        }

        public RequestResult<Product> GetProductById(int id)
        {
            try
            {
                return _productDomainService.GetProductById(id);
            }
            catch (Exception ex)
            {
                return RequestResult<Product>.CreateUnSuccesfull(ex.Message);
            }
        }

        public RequestResult<Product> SaveProduct(Product product)
        {
            try
            {
                return _productDomainService.SaveProduct(product);
            }
            catch (Exception ex)
            {
                return RequestResult<Product>.CreateUnSuccesfull(ex.Message);
            }
        }
    }
}
