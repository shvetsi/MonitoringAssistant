import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'; 
import 'rxjs/add/operator/map';
import { Report } from '../../shared/models/report';
import { Observable } from 'rxjs/Observable';
import { forEach } from "@angular/router/src/utils/collection";
import { Incident } from '../../shared/models/incident';
import { EnvironmentInfo } from '../../shared/models/environmentInfo';

@Injectable()
export class ReportsService {
    private readonly reportsEndpoint = "/api/reports"
    constructor(private http: Http) {
    }

    getReports(){
        return this.http.get(this.reportsEndpoint)
            .map(res => this.extractReports(res))
    }

    getReport(id: string){
        return this.http.get(`${this.reportsEndpoint}/${id}`)
            .map(res => this.extractReport(res))
    }

    saveReport(report: Report){
        console.log(report);
        return this.http.post(this.reportsEndpoint, report)
            .map(res => res.json)
    }

    private extractReports(response: Response){
        console.log(response.json());
        let reports: Report[] = response.json() as Report[];
        console.log(reports);
        return reports;
    }

    private extractReport(response: Response){
        console.log(response.json());
        let report = response.json() as Report;        
        return report;
    }
    private handleError(error: any, caught: Observable<any>): any{        
        let message = "";
        return Observable.throw(caught);
    }

    private createEnvironment(json: any) {
        let env: EnvironmentInfo = {
            dataCenter: json.dataCenter,
            environment: json.environment,
            project: json.project,
            machines: json.machines  
        }
    }
}