using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.DomainServices.Entities;
using WebApplication1.Models;

namespace WebApplication1.DomainServices.Contracts
{
    public interface IProductDomainService
    {
        RequestResult<IEnumerable<Product>> GetAll();
        RequestResult<Product> GetProductById(int id);
        RequestResult<Product> SaveProduct(Product product);
    }
}
