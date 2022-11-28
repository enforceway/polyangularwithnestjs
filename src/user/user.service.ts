import { Injectable } from '@nestjs/common';
import { MySQLConnectionService } from 'shared/providers/mysql.provider';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {

  constructor(private readonly mySQLConnection: MySQLConnectionService) {

  }

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  async findAll(): Promise<Array<User>> {
    const connection: any = await this.mySQLConnection.getConnection();
    return new Promise((resolve, reject) => {
      connection.query('SELECT id, user_uuid, user_name, real_name, age, sex, birth_day FROM t_user', (error: any, results: any, fields: any) => {
        if(error) {
          return reject(error);
        }
        console.log(fields.map((field: any) => {
          return field.name;
        }));
        resolve(results);
      });
    });

  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
