const mysql2 = require('mysql2');
import { Inject, Injectable } from '@nestjs/common';
import { GeneralModelIn } from 'interfaces/general.in';

export const CONNECTION_CONFIG = 'Connection_Config';

@Injectable()
export class MySQLConnection {
  private mysqlPoolInstance: any = null;

  constructor(@Inject(CONNECTION_CONFIG) connectCfg: GeneralModelIn) {
    console.log("connectionCfg:", connectCfg);
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



/*
const mysql = require('mysql2');
import DBCfg from '../../configs/mysql/mysql.connect.config';
const mysqlPool = mysql.createPool(DBCfg);

export  function getConnection() {
  return new Promise((resolve, reject) => {
    mysqlPool.getConnection(function(err: any, connection: any) {
      if (err) {
        return Promise.reject(err);
      }
      resolve(connection);
    });
  });
};

*/