import { EnvironmentInfo } from "./environmentInfo";

export class Incident {
    environment: EnvironmentInfo = new EnvironmentInfo();
    description = "";
    actions: string[] = [];
    attachments: string[] = [];
}