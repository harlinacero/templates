import { Menu, MenuByRole } from './session.interface';

export interface Role {
  id: number;
  name: string;
  description: string;
  userChange: number;
  dateModified: Date;
}

export interface RoleDTO {
  role: Role;
  menus?: Menu[];
  menuByRole: MenuByRole[];
}
