const mysql2 = require('mysql2');
import { Inject, Injectable } from '@nestjs/common';
import { MYSQL_CONNECTION_CONFIG_PROVIDER } from 'constants/conneciton.config';
import { GeneralModelIn } from 'interfaces/general.in';

@Injectable()
export class MySQLConnectionService {
  private mysqlPoolInstance: any = null;

  constructor(@Inject(MYSQL_CONNECTION_CONFIG_PROVIDER) connectCfg: GeneralModelIn) {
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
