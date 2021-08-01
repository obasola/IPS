import {Entity, model, property} from '@loopback/repository';

@model()
export class PageElement extends Entity {
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
    type: 'string',
    required: true,
  })
  type: string;

  @property({
    type: 'boolean',
  })
  editable?: boolean;

  @property({
    type: 'boolean',
  })
  visible?: boolean;

  @property({
    type: 'boolean',
  })
  enabled?: boolean;

  @property({
    type: 'date',
    required: true,
  })
  effective_date?: string;

  @property({
    type: 'date',
    required: true,
  })
  expiration_date: string;

  @property({
    type: 'number',
    required: true,
  })
  Page_id: number;


  constructor(data?: Partial<PageElement>) {
    super(data);
  }
}

export interface PageElementRelations {
  // describe navigational properties here
}

export type PageElementWithRelations = PageElement & PageElementRelations;
