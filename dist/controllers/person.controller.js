"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let PersonController = class PersonController {
    constructor(personRepository) {
        this.personRepository = personRepository;
    }
    async create(person) {
        return this.personRepository.create(person);
    }
    async count(where) {
        return this.personRepository.count(where);
    }
    async find(filter) {
        return this.personRepository.find(filter);
    }
    async updateAll(person, where) {
        return this.personRepository.updateAll(person, where);
    }
    async findById(id, filter) {
        return this.personRepository.findById(id, filter);
    }
    async updateById(id, person) {
        await this.personRepository.updateById(id, person);
    }
    async replaceById(id, person) {
        await this.personRepository.replaceById(id, person);
    }
    async deleteById(id) {
        await this.personRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/people'),
    rest_1.response(200, {
        description: 'Person model instance',
        content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Person) } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Person, {
                    title: 'NewPerson',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PersonController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/people/count'),
    rest_1.response(200, {
        description: 'Person model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Person)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PersonController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/people'),
    rest_1.response(200, {
        description: 'Array of Person model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: rest_1.getModelSchemaRef(models_1.Person, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Person)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PersonController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/people'),
    rest_1.response(200, {
        description: 'Person PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Person, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Person)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Person, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PersonController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/people/{id}'),
    rest_1.response(200, {
        description: 'Person model instance',
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Person, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Person, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PersonController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/people/{id}'),
    rest_1.response(204, {
        description: 'Person PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Person, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Person]),
    tslib_1.__metadata("design:returntype", Promise)
], PersonController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/people/{id}'),
    rest_1.response(204, {
        description: 'Person PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Person]),
    tslib_1.__metadata("design:returntype", Promise)
], PersonController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/people/{id}'),
    rest_1.response(204, {
        description: 'Person DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], PersonController.prototype, "deleteById", null);
PersonController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.PersonRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.PersonRepository])
], PersonController);
exports.PersonController = PersonController;
//# sourceMappingURL=person.controller.js.map