"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Permission = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Permission = class Permission extends repository_1.Entity {
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
], Permission.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Permission.prototype, "action", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'date',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Permission.prototype, "effective_date", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'date',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Permission.prototype, "expiration_date", void 0);
Permission = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Permission);
exports.Permission = Permission;
//# sourceMappingURL=permission.model.js.map