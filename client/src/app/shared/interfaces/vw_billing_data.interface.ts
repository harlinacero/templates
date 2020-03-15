export interface vw_billing_data {
  idProces: number;
  numeroFactura: number;
  levelAprobation: number;
  estadoFacturaId: number
  estadoAprobacion: string;
  personAprovalId: number;
  aprobador: string;
  fechaSolicitud: Date;
  fechaSolicitudText: string;
  fechaRespestaAprobador: Date;
  fechaRespestaAprobadorText:string;
  diasRespuesta: number;
  diasPactados: number;
  indicador: string;
  colorIndicador: string;
  costCenter: string;
  tasaCambio: number;
  valor: number;
  tasaCambioText: string;
  valorText: string;
  fechaFactura: Date;
  fechaLimite: Date;
  fechaRadicado: Date;
  valorMinimo: number;
  valorMaximo: number;
  valorMinimoText: string;
  valorMaximoText: string;
  proveedor: string;
  nit: string;
  tipoFactura: string;
  tipoProducto: string;
  pdf: string;
  estado: string;
  colorFactura: string;
  emailAprobator: string;
  emailProveedor: string;
  emailCompany: string;
  observaciones: string;
  id: number;
  userChange: number;
  dateModified: Date;
}

