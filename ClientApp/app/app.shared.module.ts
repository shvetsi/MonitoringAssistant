import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MonitoringComponent } from "./monitoring/monitoring.component";
import { ReportsHistoryComponent } from './reportsHistory/reports-history.component';
import { ReportsService } from './services/reports.service';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        MonitoringComponent,
        ReportsHistoryComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        AppRoutingModule
    ],
    providers: [ReportsService]
})
export class AppModuleShared {
}
