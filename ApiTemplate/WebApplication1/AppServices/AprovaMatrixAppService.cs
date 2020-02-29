﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.AppServices.Contrracts;
using WebApplication1.DomainServices.Contracts;
using WebApplication1.DomainServices.Entities;
using WebApplication1.DTOs;
using WebApplication1.Models;

namespace WebApplication1.AppServices
{
    public class AprovaMatrixAppService : IAprovaMatrixAppService
    {
        public readonly IAprovaMatrixDomainService _aprovaMatrixDomainService;

        public AprovaMatrixAppService(IAprovaMatrixDomainService aprovaMatrixDomainService)
        {
            _aprovaMatrixDomainService = aprovaMatrixDomainService;
        }

        public RequestResult<IEnumerable<AprovalMatrixDTO>> GetAllAprovalMatrix()
        {
            try
            {
               return _aprovaMatrixDomainService.GetAllAprovalMatrix();
            }
            catch (Exception ex)
            {
                return RequestResult<IEnumerable<AprovalMatrixDTO>>.CreateUnSuccesfull(ex.Message);
            }
        }

        public RequestResult<AprovalMatrix> SaveAprovalMatrix(AprovalMatrixDTO matrix)
        {
            try
            {

                List<int> personsId = new List<int>();
                AprovalMatrix provalMatrix = new AprovalMatrix()
                {
                    Id = matrix.Id,
                    ApobationLevels = matrix.ApobationLevels,
                    CostCenterid = matrix.CostCenterid,
                    DateModified = new DateTime(),
                    ExangeRate = matrix.ExangeRate,
                    Moneyid = matrix.Moneyid,
                    Productid = matrix.Productid,
                    UserChange = matrix.UserChange,
                    ValueMax = matrix.ValueMax,
                    ValueTotal = matrix.ValueTotal
                };

                foreach (var item in matrix.Personss)
                {
                    personsId.Add(item.Id);
                }

                return _aprovaMatrixDomainService.SaveAprovalMatrix(provalMatrix, personsId);
            }
            catch (Exception ex)
            {

                return RequestResult<AprovalMatrix>.CreateUnSuccesfull(ex.Message);
            }
        }
    }
}