import { Component } from "@angular/core"
import { Router } from "@angular/router";
import { EnvironmentInfo } from '../../shared/models/environment-info';

@Component({
    selector: "monitoring",
    templateUrl: "monitoring.component.html",
    styleUrls: ["monitoring.component.css"]
})
export class MonitoringComponent {
    constructor(private router: Router){}
    title="Monitoring tools"
    environmentInfo: EnvironmentInfo = new EnvironmentInfo();
    dataCenters: string[]=["GC", "Ireland"];
    environments: string[]=["Prod", "Stg", "QA"];
    projects: string[]=["ETL", "Push", "Pull", "Search"];
    machines: string[]=["1", "2", "3", "4"];
    selectedMachines: string[] = [];

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