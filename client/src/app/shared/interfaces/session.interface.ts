import { Person } from './person.interface';

export interface Session {
  person: Person;
  menus: Menu[];
}
export interface Menu {
  id: number;
  icon: string;
  name: string;
  component: string;
}

export interface MenuByRole {
  id: number;
  idRole: number;
  idMenu: number;
}
