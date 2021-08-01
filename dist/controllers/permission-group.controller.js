"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionGroupController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let PermissionGroupController = class PermissionGroupController {
    constructor(permissionGroupRepository) {
        this.permissionGroupRepository = permissionGroupRepository;
    }
    async create(permissionGroup) {
        return this.permissionGroupRepository.create(permissionGroup);
    }
    async count(where) {
        return this.permissionGroupRepository.count(where);
    }
    async find(filter) {
        return this.permissionGroupRepository.find(filter);
    }
    async updateAll(permissionGroup, where) {
        return this.permissionGroupRepository.updateAll(permissionGroup, where);
    }
    async findById(id, filter) {
        return this.permissionGroupRepository.findById(id, filter);
    }
    async updateById(id, permissionGroup) {
        await this.permissionGroupRepository.updateById(id, permissionGroup);
    }
    async replaceById(id, permissionGroup) {
        await this.permissionGroupRepository.replaceById(id, permissionGroup);
    }
    async deleteById(id) {
        await this.permissionGroupRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/permission-groups'),
    rest_1.response(200, {
        description: 'PermissionGroup model instance',
        content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.PermissionGroup) } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.PermissionGroup, {
                    title: 'NewPermissionGroup',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PermissionGroupController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/permission-groups/count'),
    rest_1.response(200, {
        description: 'PermissionGroup model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.PermissionGroup)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PermissionGroupController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/permission-groups'),
    rest_1.response(200, {
        description: 'Array of PermissionGroup model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: rest_1.getModelSchemaRef(models_1.PermissionGroup, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.PermissionGroup)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PermissionGroupController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/permission-groups'),
    rest_1.response(200, {
        description: 'PermissionGroup PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.PermissionGroup, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.PermissionGroup)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.PermissionGroup, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PermissionGroupController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/permission-groups/{id}'),
    rest_1.response(200, {
        description: 'PermissionGroup model instance',
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.PermissionGroup, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.PermissionGroup, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PermissionGroupController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/permission-groups/{id}'),
    rest_1.response(204, {
        description: 'PermissionGroup PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.PermissionGroup, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.PermissionGroup]),
    tslib_1.__metadata("design:returntype", Promise)
], PermissionGroupController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/permission-groups/{id}'),
    rest_1.response(204, {
        description: 'PermissionGroup PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.PermissionGroup]),
    tslib_1.__metadata("design:returntype", Promise)
], PermissionGroupController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/permission-groups/{id}'),
    rest_1.response(204, {
        description: 'PermissionGroup DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], PermissionGroupController.prototype, "deleteById", null);
PermissionGroupController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.PermissionGroupRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.PermissionGroupRepository])
], PermissionGroupController);
exports.PermissionGroupController = PermissionGroupController;
//# sourceMappingURL=permission-group.controller.js.map