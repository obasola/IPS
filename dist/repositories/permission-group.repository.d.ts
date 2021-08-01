import { DefaultCrudRepository } from '@loopback/repository';
import { IpsDsDataSource } from '../datasources';
import { PermissionGroup, PermissionGroupRelations } from '../models';
export declare class PermissionGroupRepository extends DefaultCrudRepository<PermissionGroup, typeof PermissionGroup.prototype.id, PermissionGroupRelations> {
    constructor(dataSource: IpsDsDataSource);
}
