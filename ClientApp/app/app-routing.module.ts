import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { MonitoringComponent } from "./components/monitoring/monitoring.component";
import { ReportComponent } from "./components/reports/report/report.component";

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
        }
    ])],
exports: [RouterModule]
})
export class AppRoutingModule{}