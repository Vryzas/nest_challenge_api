import { Controller, Get, Post } from '@nestjs/common';
import { MatchService } from './match.service';

@Controller('match')
export class MatchController {
  constructor(private matchService: MatchService) {}

  @Post('/')
  newMatch() {
    return 'This adds a new match';
  }

  @Get('player')
  player() {
    return 'This returns player matches';
  }

  @Get('compare')
  compare() {
    return 'This compares players matches';
  }
}
