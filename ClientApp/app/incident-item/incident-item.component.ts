import { Component, Input } from "@angular/core"
import { Router } from "@angular/router";
import { Incident } from "../../shared/models/incident";

@Component({
    selector: "incident-item",
    templateUrl: "incident-item.component.html",
    styleUrls: [ "incident-item.component.css" ]
})
export class IncidentItemComponent{
    @Input() incident: Incident = new Incident();    
    @Input() editMode: boolean = true;
    constructor(){}
}