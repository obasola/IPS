import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Page } from '../models';
import { PageRepository } from '../repositories';
export declare class PageController {
    pageRepository: PageRepository;
    constructor(pageRepository: PageRepository);
    create(page: Omit<Page, 'id'>): Promise<Page>;
    count(where?: Where<Page>): Promise<Count>;
    find(filter?: Filter<Page>): Promise<Page[]>;
    updateAll(page: Page, where?: Where<Page>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Page>): Promise<Page>;
    updateById(id: number, page: Page): Promise<void>;
    replaceById(id: number, page: Page): Promise<void>;
    deleteById(id: number): Promise<void>;
}
