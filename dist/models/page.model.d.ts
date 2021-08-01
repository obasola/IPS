import { Entity } from '@loopback/repository';
export declare class Page extends Entity {
    id?: number;
    name: string;
    effective_date: string;
    expiration_date: string;
    permission_id?: number;
    permission_group_id?: number;
    constructor(data?: Partial<Page>);
}
export interface PageRelations {
}
export declare type PageWithRelations = Page & PageRelations;
