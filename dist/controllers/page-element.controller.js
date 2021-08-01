"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageElementController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let PageElementController = class PageElementController {
    constructor(pageElementRepository) {
        this.pageElementRepository = pageElementRepository;
    }
    async create(pageElement) {
        return this.pageElementRepository.create(pageElement);
    }
    async count(where) {
        return this.pageElementRepository.count(where);
    }
    async find(filter) {
        return this.pageElementRepository.find(filter);
    }
    async updateAll(pageElement, where) {
        return this.pageElementRepository.updateAll(pageElement, where);
    }
    async findById(id, filter) {
        return this.pageElementRepository.findById(id, filter);
    }
    async updateById(id, pageElement) {
        await this.pageElementRepository.updateById(id, pageElement);
    }
    async replaceById(id, pageElement) {
        await this.pageElementRepository.replaceById(id, pageElement);
    }
    async deleteById(id) {
        await this.pageElementRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/page-elements'),
    rest_1.response(200, {
        description: 'PageElement model instance',
        content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.PageElement) } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.PageElement, {
                    title: 'NewPageElement',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PageElementController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/page-elements/count'),
    rest_1.response(200, {
        description: 'PageElement model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.PageElement)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PageElementController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/page-elements'),
    rest_1.response(200, {
        description: 'Array of PageElement model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: rest_1.getModelSchemaRef(models_1.PageElement, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.PageElement)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PageElementController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/page-elements'),
    rest_1.response(200, {
        description: 'PageElement PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.PageElement, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.PageElement)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.PageElement, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PageElementController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/page-elements/{id}'),
    rest_1.response(200, {
        description: 'PageElement model instance',
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.PageElement, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.PageElement, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PageElementController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/page-elements/{id}'),
    rest_1.response(204, {
        description: 'PageElement PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.PageElement, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.PageElement]),
    tslib_1.__metadata("design:returntype", Promise)
], PageElementController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/page-elements/{id}'),
    rest_1.response(204, {
        description: 'PageElement PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.PageElement]),
    tslib_1.__metadata("design:returntype", Promise)
], PageElementController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/page-elements/{id}'),
    rest_1.response(204, {
        description: 'PageElement DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], PageElementController.prototype, "deleteById", null);
PageElementController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.PageElementRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.PageElementRepository])
], PageElementController);
exports.PageElementController = PageElementController;
//# sourceMappingURL=page-element.controller.js.map