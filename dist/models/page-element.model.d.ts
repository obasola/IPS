import { Entity } from '@loopback/repository';
export declare class PageElement extends Entity {
    id?: number;
    name: string;
    type: string;
    editable?: boolean;
    visible?: boolean;
    enabled?: boolean;
    effective_date?: string;
    expiration_date: string;
    Page_id: number;
    constructor(data?: Partial<PageElement>);
}
export interface PageElementRelations {
}
export declare type PageElementWithRelations = PageElement & PageElementRelations;
