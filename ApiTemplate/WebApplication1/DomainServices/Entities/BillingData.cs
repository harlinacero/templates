using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.DomainServices.Entities
{
    public class VW_BillingData : EntityBase
    {
        public int Numerofactura { get; set; }
        public string Proveedor { get; set; }
        public string Nit { get; set; }
        public string Tipofactura { get; set; }
        public string Tipoproducto { get; set; }
        public string Costcenter { get; set; }
        public string Tasacambio { get; set; }
        public string Valor { get; set; }
        public DateTime Fechafactura { get; set; }
        public DateTime Fechalimite { get; set; }
        public DateTime Fecharadicado { get; set; }
        public string Pdf { get; set; }
        public string Estado { get; set; }
        public string Color { get; set; }
        public int Nivelaprobacion { get; set; }
        public int Diasaprobación { get; set; }
        public string Valorminimo { get; set; }
        public string Valormaximo { get; set; }
        public string Aprobador { get; set; }
        public string Email { get; set; }
        public int Estadoid { get; set; }
        public int Levelaprobation { get; set; }


    }
}
