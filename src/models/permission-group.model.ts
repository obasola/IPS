import {Entity, model, property} from '@loopback/repository';

@model()
export class PermissionGroup extends Entity {
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
  name: string;

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


  constructor(data?: Partial<PermissionGroup>) {
    super(data);
  }
}

export interface PermissionGroupRelations {
  // describe navigational properties here
}

export type PermissionGroupWithRelations = PermissionGroup & PermissionGroupRelations;
