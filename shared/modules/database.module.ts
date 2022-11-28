import { Module, DynamicModule } from '@nestjs/common';
import { MYSQL_CONNECTION_CONFIG_PROVIDER } from 'constants/conneciton.config';
import { GeneralModelIn } from 'interfaces/general.in';
import { MySQLConnectionService } from '../providers/mysql.provider';

@Module({})
export class DatabaseModule {
  static forRoot(options: GeneralModelIn): DynamicModule {
    return {
      global: true,
      module: DatabaseModule,
      providers: [{
        provide: MYSQL_CONNECTION_CONFIG_PROVIDER,
        useValue: options
      }, MySQLConnectionService],
      exports: [ MySQLConnectionService ],
    };
  }
}
