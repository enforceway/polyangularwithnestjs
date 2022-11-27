import { Module, DynamicModule } from '@nestjs/common';
import { ConnectionConfig } from 'configs/mysql/connection';
import { GeneralModelIn } from 'interfaces/general.in';
import { CONNECTION_CONFIG, MySQLConnection } from '../providers/mysql.provider';

@Module({})
export class DatabaseModule {
  static forRoot(options?: GeneralModelIn): DynamicModule {
    return {
      global: true,
      module: DatabaseModule,
      providers: [{
        provide: CONNECTION_CONFIG,
        useValue: ConnectionConfig
      }, MySQLConnection],
      exports: [ MySQLConnection ],
    };
  }
}
