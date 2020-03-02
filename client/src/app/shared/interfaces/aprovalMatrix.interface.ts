import { Person } from './person.interface';

export interface AprobalMatrixTable {
  id: number;
  productid: number;
  costcenterid: number;
  moneyid: number;
  exangeRate: number;
  valueMax: number;
  apobationLevels: number;
  valueTotal: number;
  userchange: number;
  datemodified: Date;
  productcode: string;
  productDescription: string;
  costCenterName: string;
  money: string;
  datelimit: Date;
}

export interface AprovalMatrixDTO {
  id: number;
  productid: number;
  costCenterid: number;
  moneyid: number;
  exangeRate: number;
  valueMax: number;
  apobationLevels: number;
  valueTotal: number;
  personss: Person[];
  datelimit: Date;
  userchange: number;
  datemodified: Date;
}
