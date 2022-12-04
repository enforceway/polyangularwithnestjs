import { ConfigurableModuleBuilder } from '@nestjs/common';
import { MySQLConnectionConfigIn } from 'src/interfaces/db-connection/mysql-connection.in';

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } = new ConfigurableModuleBuilder<MySQLConnectionConfigIn>().setClassMethodName('forRoot').build();
