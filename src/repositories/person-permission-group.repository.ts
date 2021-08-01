import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {IpsDsDataSource} from '../datasources';
import {PersonPermissionGroup, PersonPermissionGroupRelations} from '../models';

export class PersonPermissionGroupRepository extends DefaultCrudRepository<
  PersonPermissionGroup,
  typeof PersonPermissionGroup.prototype.id,
  PersonPermissionGroupRelations
> {
  constructor(
    @inject('datasources.ipsDS') dataSource: IpsDsDataSource,
  ) {
    super(PersonPermissionGroup, dataSource);
  }
}
