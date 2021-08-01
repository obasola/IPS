import { DefaultCrudRepository } from '@loopback/repository';
import { IpsDsDataSource } from '../datasources';
import { PersonPermissionGroup, PersonPermissionGroupRelations } from '../models';
export declare class PersonPermissionGroupRepository extends DefaultCrudRepository<PersonPermissionGroup, typeof PersonPermissionGroup.prototype.id, PersonPermissionGroupRelations> {
    constructor(dataSource: IpsDsDataSource);
}
