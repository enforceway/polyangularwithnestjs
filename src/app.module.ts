import { Module } from '@nestjs/common';
import { DatabaseModule } from 'shared/modules/database.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoleModule } from './role/role.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ DatabaseModule.forRoot({}), RoleModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
