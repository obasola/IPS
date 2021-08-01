import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Person } from '../models';
import { PersonRepository } from '../repositories';
export declare class PersonController {
    personRepository: PersonRepository;
    constructor(personRepository: PersonRepository);
    create(person: Omit<Person, 'id'>): Promise<Person>;
    count(where?: Where<Person>): Promise<Count>;
    find(filter?: Filter<Person>): Promise<Person[]>;
    updateAll(person: Person, where?: Where<Person>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Person>): Promise<Person>;
    updateById(id: number, person: Person): Promise<void>;
    replaceById(id: number, person: Person): Promise<void>;
    deleteById(id: number): Promise<void>;
}
