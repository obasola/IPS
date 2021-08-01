"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonPermissionGroupController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let PersonPermissionGroupController = class PersonPermissionGroupController {
    constructor(personPermissionGroupRepository) {
        this.personPermissionGroupRepository = personPermissionGroupRepository;
    }
    async create(personPermissionGroup) {
        return this.personPermissionGroupRepository.create(personPermissionGroup);
    }
    async count(where) {
        return this.personPermissionGroupRepository.count(where);
    }
    async find(filter) {
        return this.personPermissionGroupRepository.find(filter);
    }
    async updateAll(personPermissionGroup, where) {
        return this.personPermissionGroupRepository.updateAll(personPermissionGroup, where);
    }
    async findById(id, filter) {
        return this.personPermissionGroupRepository.findById(id, filter);
    }
    async updateById(id, personPermissionGroup) {
        await this.personPermissionGroupRepository.updateById(id, personPermissionGroup);
    }
    async replaceById(id, personPermissionGroup) {
        await this.personPermissionGroupRepository.replaceById(id, personPermissionGroup);
    }
    async deleteById(id) {
        await this.personPermissionGroupRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/person-permission-groups'),
    rest_1.response(200, {
        description: 'PersonPermissionGroup model instance',
        content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.PersonPermissionGroup) } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.PersonPermissionGroup, {
                    title: 'NewPersonPermissionGroup',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PersonPermissionGroupController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/person-permission-groups/count'),
    rest_1.response(200, {
        description: 'PersonPermissionGroup model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.PersonPermissionGroup)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PersonPermissionGroupController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/person-permission-groups'),
    rest_1.response(200, {
        description: 'Array of PersonPermissionGroup model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: rest_1.getModelSchemaRef(models_1.PersonPermissionGroup, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.PersonPermissionGroup)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PersonPermissionGroupController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/person-permission-groups'),
    rest_1.response(200, {
        description: 'PersonPermissionGroup PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.PersonPermissionGroup, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.PersonPermissionGroup)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.PersonPermissionGroup, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PersonPermissionGroupController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/person-permission-groups/{id}'),
    rest_1.response(200, {
        description: 'PersonPermissionGroup model instance',
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.PersonPermissionGroup, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.PersonPermissionGroup, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PersonPermissionGroupController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/person-permission-groups/{id}'),
    rest_1.response(204, {
        description: 'PersonPermissionGroup PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.PersonPermissionGroup, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.PersonPermissionGroup]),
    tslib_1.__metadata("design:returntype", Promise)
], PersonPermissionGroupController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/person-permission-groups/{id}'),
    rest_1.response(204, {
        description: 'PersonPermissionGroup PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.PersonPermissionGroup]),
    tslib_1.__metadata("design:returntype", Promise)
], PersonPermissionGroupController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/person-permission-groups/{id}'),
    rest_1.response(204, {
        description: 'PersonPermissionGroup DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], PersonPermissionGroupController.prototype, "deleteById", null);
PersonPermissionGroupController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.PersonPermissionGroupRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.PersonPermissionGroupRepository])
], PersonPermissionGroupController);
exports.PersonPermissionGroupController = PersonPermissionGroupController;
//# sourceMappingURL=person-permission-group.controller.js.map