import { EnvironmentInfo } from "./environmentInfo";
import { Guid } from "../guid";

export class Incident {
    readonly id: string = Guid.newGuid();
    environment: EnvironmentInfo = new EnvironmentInfo();
    description = "";
    actions: string[] = [];
    attachments: any[] = [];
}