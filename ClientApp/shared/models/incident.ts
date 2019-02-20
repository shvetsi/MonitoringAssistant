import { EnvironmentInfo } from "./environmentinfo";

export class Incident {
    environment: EnvironmentInfo = new EnvironmentInfo();
    description = "";
    actions: string[] = [];
    screenShots: string[] = [];
}