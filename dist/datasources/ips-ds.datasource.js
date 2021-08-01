"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IpsDsDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = {
    name: 'ipsDS',
    connector: 'mysql',
    url: 'mysql://dthompson:Keller05!@localhost/IPS',
    host: 'localhost',
    port: 3306,
    user: 'dthompson',
    password: 'Keller05!',
    database: 'IPS'
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let IpsDsDataSource = class IpsDsDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
IpsDsDataSource.dataSourceName = 'ipsDS';
IpsDsDataSource.defaultConfig = config;
IpsDsDataSource = tslib_1.__decorate([
    core_1.lifeCycleObserver('datasource'),
    tslib_1.__param(0, core_1.inject('datasources.config.ipsDS', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], IpsDsDataSource);
exports.IpsDsDataSource = IpsDsDataSource;
//# sourceMappingURL=ips-ds.datasource.js.map