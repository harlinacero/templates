using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using WebApplication1.DataAccess.Repository;
using WebApplication1.DomainServices.Contracts;
using WebApplication1.DomainServices.Entities;
using WebApplication1.Models;

namespace WebApplication1.DomainServices
{
    public class AprovaMatrixDomainService : IAprovaMatrixDomainService
    {
        private readonly IRepository<AprovalMatrix> _aprovalMatrixRepo;
        private readonly IRepository<AprobalMatrixUsers> _aprovalMatrixUsersRepo;
        private readonly IRepository<Person> _personRepo;
        private readonly IRepository<AprovalMatrixWithValues> _aprovalMatrixWithValues;
        private readonly IRepository<Money> _moneyRepo;
        public AprovaMatrixDomainService(IRepository<AprovalMatrix> aprovalMatrixRepo,
            IRepository<AprobalMatrixUsers> aprovalMatrixUsersRepo, IRepository<Person> personRepo,
            IRepository<AprovalMatrixWithValues> aprovalMatrixWithValues,
            IRepository<Money> moneyRepo)
        {
            _aprovalMatrixRepo = aprovalMatrixRepo;
            _aprovalMatrixUsersRepo = aprovalMatrixUsersRepo;
            _personRepo = personRepo;
            _aprovalMatrixWithValues = aprovalMatrixWithValues;
            _moneyRepo = moneyRepo;
        }

        public RequestResult<IEnumerable<Money>> GetAllMoney()
        {
            var list = _moneyRepo.ListAll();
            return RequestResult<IEnumerable<Money>>.CreateSuccesfull(list);
        }

        public RequestResult<IEnumerable<AprovalMatrixWithValues>> GetAllAprovalMatrix()
        {
            //IEnumerable<AprovalMatrixDTO> list = new List<AprovalMatrixDTO>();
            StringBuilder sql = new StringBuilder();
            sql.Append("SELECT ");
            sql.Append("AP.*, ");
            sql.Append("P.CODE AS PRODUCTCODE, ");
            sql.Append("P.DESCRIPTION AS PRODUCTDESCRIPTION,");
            sql.Append("C.NAME AS COSTCENTERNAME, ");
            sql.Append("M.SYMBOL AS MONEY ");
            sql.Append("FROM APROVALMATRIX AP ");
            sql.Append("INNER JOIN PRODUCT P ON P.ID = AP.PRODUCTID ");
            sql.Append("INNER JOIN COSTCENTER C ON C.ID = AP.COSTCENTERID ");
            sql.Append("INNER JOIN MONEY M ON M.ID = AP.MONEYID");

            var list = _aprovalMatrixWithValues.CustomList(sql.ToString());
            var listUsersByMatrix = _aprovalMatrixUsersRepo.ListAll();
            foreach (var item in list)
            {
                item.Personss = listUsersByMatrix.Where(x => x.AprovalMatrixId == item.Id).Select(x => x.Personid);
            }

            return RequestResult<IEnumerable<AprovalMatrixWithValues>>.CreateSuccesfull(list);
        }

        public RequestResult<AprovalMatrix> SaveAprovalMatrix(AprovalMatrix provalMatrix, List<int> personsId)
        {
            var matrix = _aprovalMatrixRepo.GetById(provalMatrix.Id);
            if (matrix != null)
                return UpdateMatrix(provalMatrix, personsId);

            return AddMatrix(provalMatrix, personsId);
        }

        private RequestResult<AprovalMatrix> AddMatrix(AprovalMatrix matrix, List<int> personsId)
        {
            var newmatrix = _aprovalMatrixRepo.AddWithReturn(matrix);
            if (newmatrix == null)
                return RequestResult<AprovalMatrix>.CreateUnSuccesfull("Ocurrió un Error al guardar la entidad");

            AddUsersToMatrix(newmatrix, personsId);

            return RequestResult<AprovalMatrix>.CreateSuccesfull(newmatrix);
        }

        private RequestResult<AprovalMatrix> UpdateMatrix(AprovalMatrix matrix, List<int> personsId)
        {
            var isUpdate = _aprovalMatrixRepo.Update(matrix);
            if (!isUpdate)
                return RequestResult<AprovalMatrix>.CreateUnSuccesfull("La entidad no pudo ser actualizada");

            string sql = $"DELETE FROM {nameof(AprobalMatrixUsers)} WHERE {nameof(AprobalMatrixUsers.AprovalMatrixId)} = {matrix.Id};";
            if (_aprovalMatrixRepo.CustomQuery(sql))
            {
                AddUsersToMatrix(matrix, personsId);
                return RequestResult<AprovalMatrix>.CreateSuccesfull(matrix);
            }
            return RequestResult<AprovalMatrix>.CreateUnSuccesfull("La lista de aprovadores no pudo guardarse");
        }

        private void AddUsersToMatrix(AprovalMatrix matrix, List<int> personsId)
        {
            foreach (var id in personsId)
            {
                AprobalMatrixUsers aprobalMatrixUsers = new AprobalMatrixUsers()
                {
                    AprovalMatrixId = matrix.Id,
                    Personid = id,
                    UserChange = matrix.UserChange,
                    DateModified = new DateTime()
                };
                _aprovalMatrixUsersRepo.Add(aprobalMatrixUsers);
            }
        }


    }
}
