import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Report } from "./../../../shared/models/report"
import { ReportsService } from "../../../shared/services/reports.service";

@Component({
    selector: "reports-history",
    templateUrl: "reports-history.component.html"
})
export class ReportsHistoryComponent {
    title = "Reports history"
    reports: Report[] = [];
    private selectedReport: any;
    constructor(private router: Router, private reportsService: ReportsService) {
    }

    ngOnInit() {
        this.getReports()
    }

    getReports() {
        this.reportsService.getReports().subscribe(reports => this.reports = reports);
        // [{id: "1", userName: "user", creationDate: new Date()},
        // {id: "2", userName: "user", creationDate: new Date()}]
    }

    public onSelect(report: Report){
        this.router.navigate(["/reports",report.id]).then(
            success => this.selectedReport = success ? report : this.selectedReport);
    }

    public goBack(){
        console.log("goBack");
        this.router.navigate(["/home"])
    }
}