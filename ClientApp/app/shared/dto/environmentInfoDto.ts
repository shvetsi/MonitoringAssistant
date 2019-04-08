import { EnvironmentInfo } from "../models/environmentInfo";

export class EnvironmentInfoDto{
    dataCenter = "";
    environment = "";
    project = "";
    machines: string[] = [];

    static mapToDto(env: EnvironmentInfo): EnvironmentInfoDto {
        return { dataCenter: env.dataCenter, environment: env.environment, project: env.project, machines: env.machines }
    }

    static mapFromDto(env: EnvironmentInfoDto): EnvironmentInfo {
        return { dataCenter: env.dataCenter, environment: env.environment, project: env.project, machines: env.machines }
    }
}