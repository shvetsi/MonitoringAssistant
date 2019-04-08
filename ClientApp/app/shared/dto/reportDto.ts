import { IncidentDto } from "./incidentDto";
import { Report } from "../models/report";

export class ReportDto {
    id = ""
    user = ""
    date: Date = new Date();
    incidents: IncidentDto[] = []

    static mapToDto(report: Report): ReportDto {
        let inc = report.incidents.map(i => IncidentDto.mapToDto(i))
        return { id: report.id, user: report.user, date: report.date, incidents: inc }
    }

    static mapFromDto(report: ReportDto): Report {
        return { id: report.id, user: report.user, date: report.date, incidents: [] }
    }
}