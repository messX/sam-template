import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthCheckService {
    getHealthCheck(): import("./health-check.interface").IHealthCheck {
        return { success: true}
    }
}
