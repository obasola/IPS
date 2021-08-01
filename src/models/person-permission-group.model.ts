import {Entity, model, property} from '@loopback/repository';

@model()
export class PersonPermissionGroup extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  permission_group_id: number;

  @property({
    type: 'number',
    required: true,
  })
  person_id: number;


  constructor(data?: Partial<PersonPermissionGroup>) {
    super(data);
  }
}

export interface PersonPermissionGroupRelations {
  // describe navigational properties here
}

export type PersonPermissionGroupWithRelations = PersonPermissionGroup & PersonPermissionGroupRelations;
