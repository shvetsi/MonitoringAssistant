import { Incident } from "./incident";

export class Report {
    id = ""
    user = ""
    date = ""
    incidents: Incident[] = []
}

export class CreatedReport {
    id = ""
    user = ""
}