import { Entity } from '@loopback/repository';
export declare class Person extends Entity {
    id?: number;
    email: string;
    password: string;
    first_name: string;
    last_name: string;
    gender?: string;
    effective_date: number;
    expiration_date: string;
    constructor(data?: Partial<Person>);
}
export interface PersonRelations {
}
export declare type PersonWithRelations = Person & PersonRelations;
