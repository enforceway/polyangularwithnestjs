import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConnectionConfig } from 'src/configs/mysql/connection';
import { DatabaseModule } from 'src/connections/modules/database.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { RoleModule } from './role/role.module';
import { UserModule } from './user/user.module';
import helmet from 'helmet';
import { ConfigModule } from '@nestjs/config';
import DBConf from './configs/mysql/connection.dev'

const cors = require('cors');

@Module({
  imports: [
    ConfigModule,
    ConfigModule.forRoot({
      load: [DBConf],
      isGlobal: true
    }),
    DatabaseModule.forRoot(ConnectionConfig),
    RoleModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware, helmet(), cors())
      .forRoutes('user');
  }

}
