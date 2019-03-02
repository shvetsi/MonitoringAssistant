import { Incident } from "./incident";

export class Report {
    id = ""
    user = ""
    date: Date = new Date();
    incidents: Incident[] = []
}