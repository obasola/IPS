import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {IpsDsDataSource} from '../datasources';
import {Page, PageRelations} from '../models';

export class PageRepository extends DefaultCrudRepository<
  Page,
  typeof Page.prototype.id,
  PageRelations
> {
  constructor(
    @inject('datasources.ipsDS') dataSource: IpsDsDataSource,
  ) {
    super(Page, dataSource);
  }
}
