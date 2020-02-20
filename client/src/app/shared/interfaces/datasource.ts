export interface Datasource {
  fields: Fields[];
  data: any[];
}

export interface Fields {
  code: string;
  name: string;
}
