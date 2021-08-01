"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonPermissionGroup = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let PersonPermissionGroup = class PersonPermissionGroup extends repository_1.Entity {
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
], PersonPermissionGroup.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], PersonPermissionGroup.prototype, "permission_group_id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], PersonPermissionGroup.prototype, "person_id", void 0);
PersonPermissionGroup = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], PersonPermissionGroup);
exports.PersonPermissionGroup = PersonPermissionGroup;
//# sourceMappingURL=person-permission-group.model.js.map