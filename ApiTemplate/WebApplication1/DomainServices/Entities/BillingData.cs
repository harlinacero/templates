using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.DomainServices.Entities
{
    public class VW_billing_data : EntityBase
    {
        public int IdProces { get; set; }
        public int NumeroFactura { get; set; }
        public int LevelAprobation { get; set; }
        public int EstadoFacturaId { get; set; }
        public string EstadoAprobacion { get; set; }
        public int PersonAprovalId { get; set; }
        public string Aprobador { get; set; }
        public DateTime FechaSolicitud { get; set; }
        public string FechaSolicitudText { get; set; }
        public DateTime FechaRespestaAprobador { get; set; }
        public string FechaRespestaAprobadorText { get; set; }
        public int DiasRespuesta { get; set; }
        public int DiasPactados { get; set; }
        public string Indicador { get; set; }
        public string ColorIndicador { get; set; }
        public string CostCenter { get; set; }
        public double TasaCambio { get; set; }
        public double Valor { get; set; }
        public string TasaCambioText { get; set; }
        public string ValorText { get; set; }
        public DateTime FechaFactura { get; set; }
        public DateTime FechaLimite { get; set; }
        public DateTime FechaRadicado { get; set; }
        public double ValorMinimo { get; set; }
        public double ValorMaximo { get; set; }
        public string ValorMinimoText { get; set; }
        public string ValorMaximoText { get; set; }
        public string Proveedor { get; set; }
        public string Nit { get; set; }
        public string TipoFactura { get; set; }
        public string TipoProducto { get; set; }
        public string Pdf { get; set; }
        public string Estado { get; set; }
        public string ColorFactura { get; set; }
        public string EmailAprobator { get; set; }
        public string EmailProveedor { get; set; }
        public string EmailCompany { get; set; }
        public string Observaciones { get; set; }


    }
}
