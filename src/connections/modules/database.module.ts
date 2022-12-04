import { Module, DynamicModule, Global } from '@nestjs/common';
// import { MYSQL_CONNECTION_CONFIG_PROVIDER } from 'constants/conneciton.config';
// import { GeneralModelIn } from 'interfaces/general.in';
import { MySQLConnectionService } from '../providers/mysql.provider';
import { ConfigurableModuleClass } from 'src/facility/config.module-definition';

// @Module({})
// export class DatabaseModule {
//   static forRoot(options: GeneralModelIn): DynamicModule {
//     return {
//       global: true,
//       module: DatabaseModule,
//       providers: [{
//         provide: MYSQL_CONNECTION_CONFIG_PROVIDER,
//         useValue: options
//       }, MySQLConnectionService],
//       exports: [ MySQLConnectionService ],
//     };
//   }
// }
@Global()
@Module({
  providers: [MySQLConnectionService],
  exports: [MySQLConnectionService],
})
export class DatabaseModule extends ConfigurableModuleClass {}
