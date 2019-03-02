import { Component } from "@angular/core"
import { Router, ActivatedRoute } from "@angular/router";
import { Incident } from "../../../shared/models/incident";
import { Report } from "../../../shared/models/report";
import { EnvironmentInfo } from "../../../shared/models/environmentinfo";
import { ReportsService } from "../../../shared/services/reports.service";

@Component({
    selector: "new-report",
    templateUrl: "report.component.html",
    styleUrls: ["report.component.css"]
})
export class ReportComponent {
    editMode = false;
    report: Report = new Report();
    constructor(private router: Router, 
        private activeRoute: ActivatedRoute,
        private reportsService: ReportsService) {
        
    }

    ngOnInit() {
        if(this.activeRoute.params != undefined)
            this.activeRoute.params.subscribe(p => {
                if(p["id"]){
                    this.reportsService.getReport(p["id"]).subscribe(
                        result => {
                            this.report = result;
                        },
                        error => {}
                    )
                }
            });
        else
        {
            this.report.date = new Date();//.toDateString();
            this.report.incidents.push({ environment: {dataCenter: "GC", environment: "Prod", machines: ["1", "2"], project: "ETL"}, description: "", attachments: [], actions: ["action1", "actnio2"]})
            this.report.incidents.push({ environment: {dataCenter: "GC", environment: "Stg", machines: ["1", "2"], project: "ETL"}, description: "", attachments: [], actions: ["action1", "actnio2"]})
        }
    }

    addIncident(){
        this.report.incidents.push({ environment: new EnvironmentInfo(), description: "", attachments: [], actions: [] })
    }

    deleteIncident(incident: Incident){
        console.log("deleteIncident");
        console.log(incident);
        let i = this.report.incidents.indexOf(incident);
        if( i > -1)
            this.report.incidents.splice(i, 1);
    }

    saveReport(){
        this.reportsService.saveReport(this.report).subscribe();
    }
}