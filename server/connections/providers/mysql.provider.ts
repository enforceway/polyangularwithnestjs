const mysql2 = require('mysql2');
import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
// import { MODULE_OPTIONS_TOKEN } from '@nestjs/common/cache/cache.module-definition';
import { MODULE_OPTIONS_TOKEN } from 'server/facility/config.module-definition';
import { MySQLConnectionConfigIn } from 'server/interfaces/db-connection/mysql-connection.in';
// import { MYSQL_CONNECTION_CONFIG_PROVIDER } from 'constants/conneciton.config';
// import { GeneralModelIn } from 'interfaces/general.in';

@Injectable()
export class MySQLConnectionService {
  private mysqlPoolInstance: any = null;

  constructor(private configService: ConfigService, @Inject(MODULE_OPTIONS_TOKEN) connectCfg: MySQLConnectionConfigIn) {
    const connectionLimit = this.configService.get<string>('connectionLimit');
    console.log('connectionLimit:', connectionLimit);
    this.mysqlPoolInstance = mysql2.createPool(connectCfg);
  }

  public getConnection(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.mysqlPoolInstance.getConnection(function(err: any, connection: any) {
        if (err) {
          return reject(err);
        }
        resolve(connection);
      });
    });
  }
};
