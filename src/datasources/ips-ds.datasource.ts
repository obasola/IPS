import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

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
@lifeCycleObserver('datasource')
export class IpsDsDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'ipsDS';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.ipsDS', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
