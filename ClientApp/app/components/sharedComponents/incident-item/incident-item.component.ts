import { Component, Input, Output, EventEmitter } from "@angular/core"
import { Router } from "@angular/router";
import { Incident } from "../../../shared/models/incident";
import * as FileSaver from 'file-saver';

@Component({
    selector: "incident-item",
    templateUrl: "incident-item.component.html",
    styleUrls: [ "incident-item.component.css" ]
})
export class IncidentItemComponent{
    @Input() incident: Incident = new Incident();    
    @Input() editMode: boolean = false;
    //@Output() onChanged = new EventEmitter<File>();
    filePreviews: any[] = [];
    addedAction: string = "";
    modeCaption: string = this.editMode ? "Save" : "Edit";
    constructor(){}

    changeEditMode(){
        this.editMode = !this.editMode;
        this.modeCaption = this.editMode ? "Save" : "Edit";

    }

    uploadImage(event: any) {
        let file: File = event.target.files[0];
        this.incident.attachments.push(file);
        const reader = new FileReader();
        reader.onload = () => {
            this.filePreviews.push(reader.result);
        };
        reader.readAsDataURL(file);
    }

    addAction() {
        if(this.addedAction != "" && this.incident.actions.indexOf(this.addedAction) < 0) {
            this.incident.actions.push(this.addedAction);
            this.addedAction = "";
        }
    }

    deleteAction(action: string) {
        let index = this.incident.actions.indexOf(action)
        if(index >= 0)
            this.incident.actions.splice(index, 1);
    }
}