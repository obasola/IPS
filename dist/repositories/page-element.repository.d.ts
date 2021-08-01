import { DefaultCrudRepository } from '@loopback/repository';
import { IpsDsDataSource } from '../datasources';
import { PageElement, PageElementRelations } from '../models';
export declare class PageElementRepository extends DefaultCrudRepository<PageElement, typeof PageElement.prototype.id, PageElementRelations> {
    constructor(dataSource: IpsDsDataSource);
}
