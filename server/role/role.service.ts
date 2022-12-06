import { Injectable } from '@nestjs/common';
import { MySQLConnectionService } from 'server/connections/providers/mysql.provider';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';

@Injectable()
export class RoleService {
  constructor(private readonly mySQLConnection: MySQLConnectionService) {

  }
  create(createRoleDto: CreateRoleDto) {
    return 'This action adds a new role';
  }

  async findAll(): Promise<Array<Role>> {
    const connection: any = await this.mySQLConnection.getConnection();
    return new Promise((resolve, reject) => {
      connection.query('SELECT id, role_name, description FROM t_role', function (error: any, results: any, fields: any) {
        if(error) {
          return reject(error);
        }
        resolve(results);
      });
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} role`;
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return `This action updates a #${id} role`;
  }

  remove(id: number) {
    return `This action removes a #${id} role`;
  }
}
