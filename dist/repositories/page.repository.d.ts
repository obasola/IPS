import { DefaultCrudRepository } from '@loopback/repository';
import { IpsDsDataSource } from '../datasources';
import { Page, PageRelations } from '../models';
export declare class PageRepository extends DefaultCrudRepository<Page, typeof Page.prototype.id, PageRelations> {
    constructor(dataSource: IpsDsDataSource);
}
