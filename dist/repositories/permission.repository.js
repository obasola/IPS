"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let PermissionRepository = class PermissionRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource) {
        super(models_1.Permission, dataSource);
    }
};
PermissionRepository = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject('datasources.ipsDS')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.IpsDsDataSource])
], PermissionRepository);
exports.PermissionRepository = PermissionRepository;
//# sourceMappingURL=permission.repository.js.map