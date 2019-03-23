import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Report } from "../../shared/models/report";
import { ReportsHistoryComponent } from "./reportsHistory/reports-history.component";
import { ReportComponent } from "./report/report.component";
import { ReportsRoutingModule } from "./reports-routing.module";
import { SharedResourcesModule } from "../sharedComponents/shared.resources.module";

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ReportsRoutingModule,
        SharedResourcesModule
    ],
    declarations:[
        ReportsHistoryComponent,
        ReportComponent
    ]
})
export class ReportsModule{}