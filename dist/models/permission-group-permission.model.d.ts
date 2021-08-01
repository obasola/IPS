import { Entity } from '@loopback/repository';
export declare class PermissionGroupPermission extends Entity {
    id?: number;
    permission_id?: number;
    permission_group_id?: number;
    constructor(data?: Partial<PermissionGroupPermission>);
}
export interface PermissionGroupPermissionRelations {
}
export declare type PermissionGroupPermissionWithRelations = PermissionGroupPermission & PermissionGroupPermissionRelations;
