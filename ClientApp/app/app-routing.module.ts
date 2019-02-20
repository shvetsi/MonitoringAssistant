import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { MonitoringComponent } from "./monitoring/monitoring.component";
import { ReportsHistoryComponent } from "./reportsHistory/reports-history.component";
import { ReportComponent } from "./report/report.component";

@NgModule({
    imports:[RouterModule.forRoot([
        {
            path: "",
            redirectTo: "home",
            pathMatch: "full"
        },
        {
            path: "home",
            component: HomeComponent
        },
        {
            path: "monitoring",
            component: MonitoringComponent
        },    
        {
            path: "reportsHistory",
            component: ReportsHistoryComponent
        },    
        {
            path: "newReport",
            component: ReportComponent
        }
    ])],
exports: [RouterModule]
})
export class AppRoutingModule{}