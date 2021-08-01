import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {IpsDsDataSource} from '../datasources';
import {PageElement, PageElementRelations} from '../models';

export class PageElementRepository extends DefaultCrudRepository<
  PageElement,
  typeof PageElement.prototype.id,
  PageElementRelations
> {
  constructor(
    @inject('datasources.ipsDS') dataSource: IpsDsDataSource,
  ) {
    super(PageElement, dataSource);
  }
}
