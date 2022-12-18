import { Controller, Get } from '@nestjs/common';
import { PinoLogger } from 'nestjs-pino';
import { IHealthCheck } from './health-check.interface';
import { HealthCheckService } from './health-check.service';

@Controller('health-check')
export class HealthCheckController {

    constructor(
        private readonly healthCheckService: HealthCheckService,
        private readonly logger: PinoLogger
    ){
        logger.setContext(HealthCheckController.name);
    }

    @Get()
    getHealthCheck():IHealthCheck{
        return this.healthCheckService.getHealthCheck();
    }

}
