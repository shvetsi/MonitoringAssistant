import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ReportsHistoryComponent } from "./reportsHistory/reports-history.component";
import { ReportComponent } from "./report/report.component";

@NgModule({
    imports:[
        RouterModule.forChild([
            {
                path: "",
                redirectTo: "/reports",
                pathMatch: "full"
            },
            {
                path: "reports",
                component: ReportsHistoryComponent,
                children: [ 
                    {
                        path:":id",
                        component: ReportComponent,
                        //canDeactivate: [CanDeactivateGuard]
                    }
                ]
            },{
                path: "newReport",
                component: ReportComponent
            }
        ])
    ],
    exports: [RouterModule]
})
export class ReportsRoutingModule{}