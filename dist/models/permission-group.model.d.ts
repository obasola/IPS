import { Entity } from '@loopback/repository';
export declare class PermissionGroup extends Entity {
    id?: number;
    name: string;
    effective_date: string;
    expiration_date: string;
    constructor(data?: Partial<PermissionGroup>);
}
export interface PermissionGroupRelations {
}
export declare type PermissionGroupWithRelations = PermissionGroup & PermissionGroupRelations;
