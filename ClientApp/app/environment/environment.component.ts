import { Component, Input } from "@angular/core";
import { EnvironmentInfo } from "../../shared/models/environmentInfo";
import { Router } from "@angular/router";


@Component({
    selector: "environment",
    templateUrl: "environment.component.html",
    styleUrls: ["environment.component.css"]
})
export class EnvironmentComponent {
    @Input() environmentInfo: EnvironmentInfo = new EnvironmentInfo();
    @Input() editMode: boolean = true;
    dataCenters: string[]=["GC", "Ireland"];
    environments: string[]=["Prod", "Stg", "QA"];
    projects: string[]=["ETL", "Push", "Pull", "Search"];
    machines: string[]=["1", "2", "3", "4"];
    selectedMachines: string[] = [];

    constructor(private router: Router) {
    }

    ngOnInit() {
        this.environmentInfo.dataCenter = this.dataCenters[0];
        this.environmentInfo.environment = this.environments[0];
        this.environmentInfo.project = this.projects[0];
        this.environmentInfo.machines = this.selectedMachines;
       }

    machineSelectionChanged(isChecked: boolean, machineName: string){
        if(isChecked && !(this.selectedMachines.indexOf(machineName) < 0))
            this.selectedMachines.concat([machineName])
        else this.selectedMachines.splice(this.selectedMachines.indexOf(machineName), 1);
    }
}