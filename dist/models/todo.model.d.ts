import { Entity } from '@loopback/repository';
export declare class Todo extends Entity {
    id?: number;
    action_item: string;
    completed: boolean;
    person_id: number;
    constructor(data?: Partial<Todo>);
}
export interface TodoRelations {
}
export declare type TodoWithRelations = Todo & TodoRelations;
