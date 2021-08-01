"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let PageController = class PageController {
    constructor(pageRepository) {
        this.pageRepository = pageRepository;
    }
    async create(page) {
        return this.pageRepository.create(page);
    }
    async count(where) {
        return this.pageRepository.count(where);
    }
    async find(filter) {
        return this.pageRepository.find(filter);
    }
    async updateAll(page, where) {
        return this.pageRepository.updateAll(page, where);
    }
    async findById(id, filter) {
        return this.pageRepository.findById(id, filter);
    }
    async updateById(id, page) {
        await this.pageRepository.updateById(id, page);
    }
    async replaceById(id, page) {
        await this.pageRepository.replaceById(id, page);
    }
    async deleteById(id) {
        await this.pageRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/pages'),
    rest_1.response(200, {
        description: 'Page model instance',
        content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Page) } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Page, {
                    title: 'NewPage',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PageController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/pages/count'),
    rest_1.response(200, {
        description: 'Page model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Page)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PageController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/pages'),
    rest_1.response(200, {
        description: 'Array of Page model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: rest_1.getModelSchemaRef(models_1.Page, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Page)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PageController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/pages'),
    rest_1.response(200, {
        description: 'Page PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Page, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Page)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Page, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PageController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/pages/{id}'),
    rest_1.response(200, {
        description: 'Page model instance',
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Page, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Page, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PageController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/pages/{id}'),
    rest_1.response(204, {
        description: 'Page PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Page, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Page]),
    tslib_1.__metadata("design:returntype", Promise)
], PageController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/pages/{id}'),
    rest_1.response(204, {
        description: 'Page PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Page]),
    tslib_1.__metadata("design:returntype", Promise)
], PageController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/pages/{id}'),
    rest_1.response(204, {
        description: 'Page DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], PageController.prototype, "deleteById", null);
PageController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.PageRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.PageRepository])
], PageController);
exports.PageController = PageController;
//# sourceMappingURL=page.controller.js.map