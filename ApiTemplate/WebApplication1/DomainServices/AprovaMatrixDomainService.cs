using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.DataAccess.Repository;
using WebApplication1.DomainServices.Contracts;
using WebApplication1.DomainServices.Entities;
using WebApplication1.DTOs;
using WebApplication1.Models;

namespace WebApplication1.DomainServices
{
    public class AprovaMatrixDomainService : IAprovaMatrixDomainService
    {
        private readonly IRepository<AprovalMatrix> _aprovalMatrixRepo;
        private readonly IRepository<AprobalMatrixUsers> _aprovalMatrixUsersRepo;
        private readonly IRepository<Person> _personRepo;
        public AprovaMatrixDomainService(IRepository<AprovalMatrix> aprovalMatrixRepo, IRepository<AprobalMatrixUsers> aprovalMatrixUsersRepo, IRepository<Person> personRepo)
        {
            _aprovalMatrixRepo = aprovalMatrixRepo;
            _aprovalMatrixUsersRepo = aprovalMatrixUsersRepo;
            _personRepo = personRepo;
        }

        public RequestResult<IEnumerable<AprovalMatrixDTO>> GetAllAprovalMatrix()
        {
            var listmMatrix = _aprovalMatrixRepo.ListAll();
            var aprovalMatrixDTO = new List<AprovalMatrixDTO>();
            return RequestResult<IEnumerable<AprovalMatrixDTO>>.CreateSuccesfull(aprovalMatrixDTO);
        }

        public RequestResult<AprovalMatrix> SaveAprovalMatrix(AprovalMatrix provalMatrix, List<int> personsId)
        {
            var matrix = _aprovalMatrixRepo.GetById(provalMatrix.Id);
            if (matrix != null)
                return UpdateMatrix(matrix, personsId);

            return AddMatrix(matrix, personsId);
        }

        private RequestResult<AprovalMatrix> AddMatrix(AprovalMatrix matrix, List<int> personsId)
        {
            var newmatrix = _aprovalMatrixRepo.AddWithReturn(matrix);
            if (newmatrix != null)
                return RequestResult<AprovalMatrix>.CreateUnSuccesfull("Ocurrió un Error al guardar la entidad");

            foreach (var id in personsId)
            {
                AprobalMatrixUsers aprobalMatrixUsers = new AprobalMatrixUsers()
                {
                    AprovalMatrixId = newmatrix.Id,
                    Personid = id,
                    UserChange = matrix.UserChange,
                    DateModified = new DateTime()
                };
                _aprovalMatrixUsersRepo.Add(aprobalMatrixUsers);
            }

            return RequestResult<AprovalMatrix>.CreateSuccesfull(newmatrix);
        }

        private RequestResult<AprovalMatrix> UpdateMatrix(AprovalMatrix matrix, List<int> personsId)
        {
            var isUpdate =_aprovalMatrixRepo.Update(matrix);
            if (!isUpdate)
                return RequestResult<AprovalMatrix>.CreateUnSuccesfull("La entidad no pudo ser actualizada");

            var oldMatrix =_aprovalMatrixRepo.GetById(matrix.Id);
            return null;

        }
    }
}
