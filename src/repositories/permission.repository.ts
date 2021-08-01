import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {IpsDsDataSource} from '../datasources';
import {Permission, PermissionRelations} from '../models';

export class PermissionRepository extends DefaultCrudRepository<
  Permission,
  typeof Permission.prototype.id,
  PermissionRelations
> {
  constructor(
    @inject('datasources.ipsDS') dataSource: IpsDsDataSource,
  ) {
    super(Permission, dataSource);
  }
}
