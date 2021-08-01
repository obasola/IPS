import {Entity, model, property} from '@loopback/repository';

@model()
export class PermissionGroupPermission extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
  })
  permission_id?: number;

  @property({
    type: 'number',
  })
  permission_group_id?: number;


  constructor(data?: Partial<PermissionGroupPermission>) {
    super(data);
  }
}

export interface PermissionGroupPermissionRelations {
  // describe navigational properties here
}

export type PermissionGroupPermissionWithRelations = PermissionGroupPermission & PermissionGroupPermissionRelations;
