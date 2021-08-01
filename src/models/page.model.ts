import {Entity, model, property} from '@loopback/repository';

@model()
export class Page extends Entity {
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

  @property({
    type: 'number'
  })
  permission_id?: number;

  @property({
    type: 'number',
  })
  permission_group_id?: number;


  constructor(data?: Partial<Page>) {
    super(data);
  }
}

export interface PageRelations {
  // describe navigational properties here
}

export type PageWithRelations = Page & PageRelations;
