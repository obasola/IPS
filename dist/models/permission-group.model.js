"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionGroup = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let PermissionGroup = class PermissionGroup extends repository_1.Entity {
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
], PermissionGroup.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], PermissionGroup.prototype, "name", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'date',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], PermissionGroup.prototype, "effective_date", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'date',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], PermissionGroup.prototype, "expiration_date", void 0);
PermissionGroup = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], PermissionGroup);
exports.PermissionGroup = PermissionGroup;
//# sourceMappingURL=permission-group.model.js.map