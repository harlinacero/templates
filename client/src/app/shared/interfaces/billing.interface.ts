export interface Billing {
  id?: number;
  numberBilling: string;
  providerId: number;
  billingType: number;
  productType: number;
  costcenterId: number;
  moneyId: number;
  exchangeRate: number;
  dateBilling: Date;
  dateLimit: Date;
  dateFiled: Date;
  valueBill: number;
  userChange: number;
  dateCreated: Date;
  stateid: number;
  dateAprovalRejection: Date;
  casueRejection: string;
  userRejection: number;
  routeFile: string;

}


export interface Vw_billing {
  numeroFactura: number;
  proveedor: string;
  tipoFactura: string;
  tipoProducto: string;
  costCenter: string;
  fechaFactura: Date;
  fechaLimite: Date;
  fechaRadicado: Date;
  valorText: string;
  estado: string;
  colorFactura: string;
  indicador: string;
  colorIndicador: string;
}
