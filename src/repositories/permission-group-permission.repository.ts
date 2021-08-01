import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {IpsDsDataSource} from '../datasources';
import {PermissionGroupPermission, PermissionGroupPermissionRelations} from '../models';

export class PermissionGroupPermissionRepository extends DefaultCrudRepository<
  PermissionGroupPermission,
  typeof PermissionGroupPermission.prototype.id,
  PermissionGroupPermissionRelations
> {
  constructor(
    @inject('datasources.ipsDS') dataSource: IpsDsDataSource,
  ) {
    super(PermissionGroupPermission, dataSource);
  }
}
