export interface Company {
  id?: number;
  businessName: string;
  logo: string;
  nit: string;
  emailCompany: string;
  emailTreasury: string;
  accountableInterface: boolean;
  purchaseOrders: boolean;
  userchange: number;
  datemodified: Date;
}
