import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { PermissionGroupPermission } from '../models';
import { PermissionGroupPermissionRepository } from '../repositories';
export declare class PermissionGroupPermissionController {
    permissionGroupPermissionRepository: PermissionGroupPermissionRepository;
    constructor(permissionGroupPermissionRepository: PermissionGroupPermissionRepository);
    create(permissionGroupPermission: Omit<PermissionGroupPermission, 'id'>): Promise<PermissionGroupPermission>;
    count(where?: Where<PermissionGroupPermission>): Promise<Count>;
    find(filter?: Filter<PermissionGroupPermission>): Promise<PermissionGroupPermission[]>;
    updateAll(permissionGroupPermission: PermissionGroupPermission, where?: Where<PermissionGroupPermission>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<PermissionGroupPermission>): Promise<PermissionGroupPermission>;
    updateById(id: number, permissionGroupPermission: PermissionGroupPermission): Promise<void>;
    replaceById(id: number, permissionGroupPermission: PermissionGroupPermission): Promise<void>;
    deleteById(id: number): Promise<void>;
}
