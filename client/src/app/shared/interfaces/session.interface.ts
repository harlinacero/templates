import { Person } from './person.interface';

export interface Session {
  person: Person;
  menus: Menu[];
}
export interface Menu {
  icon: string;
  name: string;
  component: string;
}

