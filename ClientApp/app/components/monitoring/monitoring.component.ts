import { Component } from "@angular/core"
import { Router } from "@angular/router";
import { EnvironmentInfo } from '../../shared/models/environmentInfo';

@Component({
    selector: "monitoring",
    templateUrl: "monitoring.component.html",
    styleUrls: ["monitoring.component.css"]
})
export class MonitoringComponent {
    constructor(private router: Router){}
    title="Monitoring tools"
    environmentInfo: EnvironmentInfo = new EnvironmentInfo();

    ngOnInit() {
       }

}