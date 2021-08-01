import { DefaultCrudRepository } from '@loopback/repository';
import { IpsDsDataSource } from '../datasources';
import { PermissionGroupPermission, PermissionGroupPermissionRelations } from '../models';
export declare class PermissionGroupPermissionRepository extends DefaultCrudRepository<PermissionGroupPermission, typeof PermissionGroupPermission.prototype.id, PermissionGroupPermissionRelations> {
    constructor(dataSource: IpsDsDataSource);
}
