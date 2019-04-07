import { EnvironmentInfoDto } from "./environmentInfoDto";
import { Incident } from "../models/incident";

export class IncidentDto {
    id: string = "";
    environment: EnvironmentInfoDto = new EnvironmentInfoDto();
    description = "";
    actions: string[] = [];
    attachments: string[] = [];

    static mapToDto(incident: Incident) {
        return { id: incident.id, environment: EnvironmentInfoDto.mapToDto(incident.environment), description: incident.description, actions: incident.actions, attachments: [] }
    }
}