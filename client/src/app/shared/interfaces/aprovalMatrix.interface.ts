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

export interface AprobalMatrix {
  id?: number;
  levelAprobation: number;
  costCenterId: number;
  personId: number;
  daysToAprobate: number;
  valueMin: number;
  valueMax: number;
  userChange: number;
  dateModified: Date;
}
