import { Controller, Get } from '@nestjs/common';
import { User, UserService } from './user.service';

@Controller('/v1/user')
export class UserController {
  constructor(private readonly appService: UserService) {}

  @Get()
  getUsers(): User[] {
    return this.appService.get();
  }
}
