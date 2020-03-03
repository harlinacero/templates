using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.DomainServices.Entities;
using WebApplication1.DTOs;
using WebApplication1.Models;

namespace WebApplication1.DomainServices.Contracts
{
    public interface IAprovaMatrixDomainService
    {
        RequestResult<AprovalMatrix> SaveAprovalMatrix(AprovalMatrix provalMatrix, List<int> personsId);
        RequestResult<IEnumerable<AprovalMatrixWithValues>> GetAllAprovalMatrix();
        RequestResult<IEnumerable<Money>> GetAllMoney();
    }
}
