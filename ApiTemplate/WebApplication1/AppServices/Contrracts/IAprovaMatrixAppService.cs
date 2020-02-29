using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.DomainServices.Entities;
using WebApplication1.DTOs;
using WebApplication1.Models;

namespace WebApplication1.AppServices.Contrracts
{
    public interface IAprovaMatrixAppService
    {
        RequestResult<IEnumerable<AprovalMatrixDTO>> GetAllAprovalMatrix();
        RequestResult<AprovalMatrix> SaveAprovalMatrix(AprovalMatrixDTO matrix);
    }
}
