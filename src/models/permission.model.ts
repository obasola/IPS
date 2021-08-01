import {Entity, model, property} from '@loopback/repository';

@model()
export class Permission extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  action: string;

  @property({
    type: 'date',
    required: true,
  })
  effective_date: string;

  @property({
    type: 'date',
    required: true,
  })
  expiration_date: string;


  constructor(data?: Partial<Permission>) {
    super(data);
  }
}

export interface PermissionRelations {
  // describe navigational properties here
}

export type PermissionWithRelations = Permission & PermissionRelations;
