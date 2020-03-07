export interface Billing {
    id?: number;
    numberbilling: number;
    providerid: number;
    billingtype: number;
    producttype: number;
    costcenterid: number;
    moneyid: number;
    exchangerate: number;
    datebilling: Date;
    datelimit: Date;
    datefiled: Date;
    valuebill: number;
    userchange: number;
    datecreated: Date;
    stateid: number;
    dateaprovalrejection: Date;
    casuerejection: string;
    userrejection: number;
    routefile: string;
}
