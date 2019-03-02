import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { EnvironmentComponent } from "./environment/environment.component";
import { IncidentItemComponent } from "./incident-item/incident-item.component";
export { EnvironmentComponent } from "./environment/environment.component";
export { IncidentItemComponent } from "./incident-item/incident-item.component";

@NgModule({
    imports:[
        CommonModule,
        FormsModule
    ],
    declarations:[
        EnvironmentComponent,
        IncidentItemComponent
    ],
    exports:[
        EnvironmentComponent,
        IncidentItemComponent
    ]
})
export class SharedResourcesModule
{}