using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.DomainServices.Entities
{
    public class Vw_billing : EntityBase
    {
        public string NumeroFactura { get; set; }
        public string Proveedor { get; set; }
        public string TipoFactura { get; set; }
        public string TipoProducto { get; set; }
        public string CostCenter { get; set; }
        public DateTime FechaFactura { get; set; }
        public DateTime FechaLimite { get; set; }
        public DateTime FechaRadicado { get; set; }
        public DateTime DateCreated { get; set; }
        public string ValorText { get; set; }
        public string Estado { get; set; }
        public string ColorFactura { get; set; }
        public string Indicador { get; set; }
        public string ColorIndicador { get; set; }
        public string File { get; set; }
    }
}
