import { Controller, Get, Patch, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup() {
    return 'This is signup';
  }

  @Patch('activation')
  activation() {
    return 'This returns the activation';
  }

  @Post('login')
  login() {
    return 'This is login';
  }

  @Get('logout')
  logout() {
    return 'This is logout';
  }
}
