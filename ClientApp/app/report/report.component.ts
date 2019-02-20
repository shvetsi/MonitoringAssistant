import { Component } from "@angular/core"
import { Router } from "@angular/router";
import { Incident } from "../../shared/models/incident";
import { Report } from "../../shared/models/report";
import { EnvironmentInfo } from "../../shared/models/environmentinfo";

@Component({
    selector: "new-report",
    templateUrl: "report.component.html",
    styleUrls: ["report.component.css"]
})
export class ReportComponent {
    editMode = false;
    report: Report = new Report();
    constructor(private router: Router) {
        
    }

    ngOnInit() {
        this.report.date = new Date().toDateString();
        this.report.incidents.push({environment: {dataCenter: "GC", environment: "Prod", machines: ["1", "2"], project: "ETL"}, description: "", screenShots: [], actions: ["action1", "actnio2"]})
        this.report.incidents.push({environment: {dataCenter: "GC", environment: "Stg", machines: ["1", "2"], project: "ETL"}, description: "", screenShots: [], actions: ["action1", "actnio2"]})
    }

    addIncident(){
        this.report.incidents.push({ environment: new EnvironmentInfo(), description: "", screenShots: [], actions: [] })
    }
}