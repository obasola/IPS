import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Permission } from '../models';
import { PermissionRepository } from '../repositories';
export declare class PermissionController {
    permissionRepository: PermissionRepository;
    constructor(permissionRepository: PermissionRepository);
    create(permission: Omit<Permission, 'id'>): Promise<Permission>;
    count(where?: Where<Permission>): Promise<Count>;
    find(filter?: Filter<Permission>): Promise<Permission[]>;
    updateAll(permission: Permission, where?: Where<Permission>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Permission>): Promise<Permission>;
    updateById(id: number, permission: Permission): Promise<void>;
    replaceById(id: number, permission: Permission): Promise<void>;
    deleteById(id: number): Promise<void>;
}
