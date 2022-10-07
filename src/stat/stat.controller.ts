import { Controller, Get, Patch } from '@nestjs/common';
import { StatService } from './stat.service';

@Controller('stat')
export class StatController {
  constructor(private statService: StatService) {}

  @Patch('updateWin')
  win() {
    return 'This updates wins.';
  }

  @Patch('updateDraw')
  draw() {
    return 'This updates draws.';
  }

  @Patch('updateDefeat')
  defeat() {
    return 'This updates defeats.';
  }

  @Get('stats')
  stats() {
    return 'This returns a player stats.';
  }

  @Get('compare')
  compareStats() {
    return 'This presents a stats comparison.';
  }
}
