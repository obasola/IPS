import { Entity } from '@loopback/repository';
export declare class Permission extends Entity {
    id?: number;
    action: string;
    effective_date: string;
    expiration_date: string;
    constructor(data?: Partial<Permission>);
}
export interface PermissionRelations {
}
export declare type PermissionWithRelations = Permission & PermissionRelations;
