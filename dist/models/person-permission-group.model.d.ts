import { Entity } from '@loopback/repository';
export declare class PersonPermissionGroup extends Entity {
    id?: number;
    permission_group_id: number;
    person_id: number;
    constructor(data?: Partial<PersonPermissionGroup>);
}
export interface PersonPermissionGroupRelations {
}
export declare type PersonPermissionGroupWithRelations = PersonPermissionGroup & PersonPermissionGroupRelations;
