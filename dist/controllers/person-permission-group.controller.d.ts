import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { PersonPermissionGroup } from '../models';
import { PersonPermissionGroupRepository } from '../repositories';
export declare class PersonPermissionGroupController {
    personPermissionGroupRepository: PersonPermissionGroupRepository;
    constructor(personPermissionGroupRepository: PersonPermissionGroupRepository);
    create(personPermissionGroup: Omit<PersonPermissionGroup, 'id'>): Promise<PersonPermissionGroup>;
    count(where?: Where<PersonPermissionGroup>): Promise<Count>;
    find(filter?: Filter<PersonPermissionGroup>): Promise<PersonPermissionGroup[]>;
    updateAll(personPermissionGroup: PersonPermissionGroup, where?: Where<PersonPermissionGroup>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<PersonPermissionGroup>): Promise<PersonPermissionGroup>;
    updateById(id: number, personPermissionGroup: PersonPermissionGroup): Promise<void>;
    replaceById(id: number, personPermissionGroup: PersonPermissionGroup): Promise<void>;
    deleteById(id: number): Promise<void>;
}
