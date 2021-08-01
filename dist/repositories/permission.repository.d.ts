import { DefaultCrudRepository } from '@loopback/repository';
import { IpsDsDataSource } from '../datasources';
import { Permission, PermissionRelations } from '../models';
export declare class PermissionRepository extends DefaultCrudRepository<Permission, typeof Permission.prototype.id, PermissionRelations> {
    constructor(dataSource: IpsDsDataSource);
}
