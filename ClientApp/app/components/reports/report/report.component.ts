import { Component, EventEmitter } from "@angular/core"
import { Router, ActivatedRoute } from "@angular/router";
import { Incident } from "../../../shared/models/incident";
import { Report } from "../../../shared/models/report";
import { EnvironmentInfo } from "../../../shared/models/environmentInfo";
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
    }

    addIncident(){
        let inc = new Incident()
        this.report.incidents.unshift(inc)
        this.saveReport()
    }

    updateFiles(inc: Incident, $event: any){
        console.log("onChanged")
        this.reportsService.uploadFile(this.report.id, inc.id, $event)
            .subscribe((data: any) => 
            {
                console.log(data)
                inc.attachments.push(data) 
                console.log(inc.attachments)
            })
    }

    deleteIncident(incident: Incident){
        console.log("deleteIncident");
        console.log(incident);
        let i = this.report.incidents.indexOf(incident);
        if( i > -1)
            this.report.incidents.splice(i, 1);
    }

    saveReport(){
        this.reportsService.saveReport(this.report);
    }
}