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
        RequestResult<IEnumerable<AprovalMatrix>> SaveAprovalMatrix(List<AprovalMatrix> matrices);
        RequestResult<IEnumerable<AprovalMatrix>> GetAllAprovalMatrix();
        RequestResult<IEnumerable<Money>> GetAllMoney();
    }
}
