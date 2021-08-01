"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionGroupPermission = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let PermissionGroupPermission = class PermissionGroupPermission extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], PermissionGroupPermission.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], PermissionGroupPermission.prototype, "permission_id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], PermissionGroupPermission.prototype, "permission_group_id", void 0);
PermissionGroupPermission = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], PermissionGroupPermission);
exports.PermissionGroupPermission = PermissionGroupPermission;
//# sourceMappingURL=permission-group-permission.model.js.map