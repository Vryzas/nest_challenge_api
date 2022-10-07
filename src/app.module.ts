import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { StatModule } from './stat/stat.module';
import { MatchModule } from './match/match.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, StatModule, MatchModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
