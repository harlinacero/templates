import { Person } from './person.interface';

// export interface AprobalMatrixTable {
//   id: number;
//   productid: number;
//   costCenterid: number;
//   moneyid: number;
//   exangeRate: number;
//   valueMax: number;
//   apobationLevels: number;
//   valueTotal: number;
//   userchange: number;
//   datemodified: Date;
//   productcode: string;
//   productDescription: string;
//   costCenterName: string;
//   money: string;
//   datelimit: Date;
//   personss: number[];
// }

// export interface AprovalMatrixDTO {
//   id: number;
//   productid: number;
//   costCenterid: number;
//   moneyid: number;
//   exangeRate: number;
//   valueMax: number;
//   apobationLevels: number;
//   valueTotal: number;
//   datelimit: Date;
//   userchange: number;
//   datemodified: Date;
//   personss: number[];
// }

export interface AprovalMatrix {
  id?: number;
  levelAprobation: number;
  costCenterId: number;
  personId: number;
  daysToAprobate: number;
  moneyId: number;
  valueMin: number;
  valueMax: number;
  userChange: number;
  dateModified: Date;
}


// public string numerofactura {get;set;}
//   public string proveedor {get;set;}
//   public string nit {get;set;}
//   public string tipofactura, {get;set;}
// public string tipoproducto {get;set;}
//   public string costcenter {get;set;}
//   public string tasacambio {get;set;}
//   public string valor {get;set;}
//   public string fechafactura {get;set;}
//   public string fechalimite {get;set;}
//   public string fecharadicado {get;set;}
//   public string pdf {get;set;}
//   public string estado {get;set;}
//   public string color {get;set;}
//   public string nivelaprobacion {get;set;}
//   public string diasaprobación {get;set;}
//   public string valorminimo {get;set;}
//   public string valormaximo {get;set;}
//   public string aprobador {get;set;}
//   public string email {get;set;}
//     public string estadoid {get;set;}
//       public string levelaprobation {get;set;}
