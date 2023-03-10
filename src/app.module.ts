import { Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino/LoggerModule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthCheckModule } from './health-check/health-check.module';
@Module({
  imports: [HealthCheckModule, LoggerModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
