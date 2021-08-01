import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {IpsDsDataSource} from '../datasources';
import {PermissionGroup, PermissionGroupRelations} from '../models';

export class PermissionGroupRepository extends DefaultCrudRepository<
  PermissionGroup,
  typeof PermissionGroup.prototype.id,
  PermissionGroupRelations
> {
  constructor(
    @inject('datasources.ipsDS') dataSource: IpsDsDataSource,
  ) {
    super(PermissionGroup, dataSource);
  }
}
