import { EnvironmentInfo } from "../models/environmentInfo";

export class EnvironmentInfoDto{
    dataCenter = "";
    environment = "";
    project = "";
    machines: string[] = [];

    static mapToDto(env: EnvironmentInfo) {
        return { dataCenter: env.dataCenter, environment: env.environment, project: env.project, machines: env.machines }
    }
}