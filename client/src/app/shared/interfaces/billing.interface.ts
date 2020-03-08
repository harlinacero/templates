export interface Billing {
    id?: number;
    numberBilling: number;
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
