export class Person {
  id: number;
  documentType: number;
  documentNumber: string;
  firstName: string;
  secondName: string;
  lastName: string;
  secondLastName: string;
  email: string;
  phone: string;
  address: string;
  roleId: number;
  password: string;
  userChange: number;
  dateModified: Date;
}

export class DocumentType {
  id: number;
  resume: string;
  name: string;
  description: string;
  userchange: number;
  datemodified: Date;
}
