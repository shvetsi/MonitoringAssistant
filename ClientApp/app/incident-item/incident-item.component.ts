import { Component } from "@angular/core"
import { Router } from "@angular/router";

@Component({
    selector: "incident-item",
    templateUrl: "incident-item.component.html",
    styleUrls: [ "incident-item.component.css" ]
})
export class IncidentItemComponent{
    constructor(){}
    machineNames: string[] = [];
    description = "";
    actions: string[] = [];
    screenShots: string[] = [];
}