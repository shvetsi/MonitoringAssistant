import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MonitoringComponent } from "./components/monitoring/monitoring.component";
import { ReportsService } from './shared/services/reports.service';
import { SharedResourcesModule } from './components/sharedResources/shared.resources.module';
import { ReportsModule } from './components/reports/reports.module';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        MonitoringComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        AppRoutingModule,
        ReportsModule,
        SharedResourcesModule
    ],
    providers: [ReportsService]
})
export class AppModuleShared {
}
