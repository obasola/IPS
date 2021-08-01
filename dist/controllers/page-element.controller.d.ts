import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { PageElement } from '../models';
import { PageElementRepository } from '../repositories';
export declare class PageElementController {
    pageElementRepository: PageElementRepository;
    constructor(pageElementRepository: PageElementRepository);
    create(pageElement: Omit<PageElement, 'id'>): Promise<PageElement>;
    count(where?: Where<PageElement>): Promise<Count>;
    find(filter?: Filter<PageElement>): Promise<PageElement[]>;
    updateAll(pageElement: PageElement, where?: Where<PageElement>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<PageElement>): Promise<PageElement>;
    updateById(id: number, pageElement: PageElement): Promise<void>;
    replaceById(id: number, pageElement: PageElement): Promise<void>;
    deleteById(id: number): Promise<void>;
}
