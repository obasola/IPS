import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { PermissionGroup } from '../models';
import { PermissionGroupRepository } from '../repositories';
export declare class PermissionGroupController {
    permissionGroupRepository: PermissionGroupRepository;
    constructor(permissionGroupRepository: PermissionGroupRepository);
    create(permissionGroup: Omit<PermissionGroup, 'id'>): Promise<PermissionGroup>;
    count(where?: Where<PermissionGroup>): Promise<Count>;
    find(filter?: Filter<PermissionGroup>): Promise<PermissionGroup[]>;
    updateAll(permissionGroup: PermissionGroup, where?: Where<PermissionGroup>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<PermissionGroup>): Promise<PermissionGroup>;
    updateById(id: number, permissionGroup: PermissionGroup): Promise<void>;
    replaceById(id: number, permissionGroup: PermissionGroup): Promise<void>;
    deleteById(id: number): Promise<void>;
}
