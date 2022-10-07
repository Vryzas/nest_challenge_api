import { Controller, Get, Patch } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('profile')
  profile() {
    return 'This returns the profile';
  }

  @Get('stats')
  stats() {
    return 'This returns the stats';
  }

  @Get('matches')
  matches() {
    return 'This returns the matches';
  }

  @Get('passwordRecovery')
  passwordRecovery() {
    return 'This enters the password recovery';
  }

  @Get('newPassword')
  newPassword() {
    return 'This enters the new Password';
  }

  @Patch('changePassword')
  changePassword() {
    return 'This returns the change password';
  }
}
