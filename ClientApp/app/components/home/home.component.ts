import { Component } from "@angular/core"
import { Router } from "@angular/router";


@Component({
    selector: "my-home",
    templateUrl: "home.component.html",
    styleUrls: ["home.component.css"]
})
export class HomeComponent{
    constructor(private router: Router){}
    title = 'Shift Assistant';

    goToMonitoring() {
        this.router.navigate(["/monitoring"]); 
    }

    createNewReport() {
        console.log("createNew");
        this.router.navigate(["/newReport"])
    }

    openReportsHistory() {
        this.router.navigate(["/reports"]);
    }
}