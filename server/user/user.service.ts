import { Injectable } from '@nestjs/common';
import { MySQLConnectionService } from 'server/connections/providers/mysql.provider';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {

  constructor(private readonly mySQLConnection: MySQLConnectionService) {

  }

  create(createUserDto: CreateUserDto) {
    const user: User = createUserDto.user;
    user.user_uuid = '5678d0';
    return {
      id: 1000,
      username: user.user_name,
    };
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
