import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'; 
import 'rxjs/add/operator/map';
import { Report } from '../../shared/models/report';
import { Observable } from 'rxjs/Observable';
import { forEach } from "@angular/router/src/utils/collection";

@Injectable()
export class ReportsService {
    private readonly reportsEndpoint = "api/reports"
    constructor(private http: Http) {
    }

    getReports(){
        return this.http.get(this.reportsEndpoint)
            .map(res => this.extractReports(res, this))
    }

    getReport(id: string){
        return this.http.get(`${this.reportsEndpoint}/${id}`)
            .map(res => this.extractReport(res, this))
    }

    saveReport(report: Report){
        
        console.log("saveReport");
        return this.http.post(this.reportsEndpoint, report)
            .map(res => res.json)
    }

    private extractReports(response: Response, self: any){
        let reports: Report[] = [];
        if(response != undefined)
        {        
            let json = response.json();
            json.forEach((g: any) => 
            {
                reports.push(self.createReport(g));
            });
        }
        return reports;
    }

    private extractReport(response: Response, self: any){
        let json = response.json();
        let report = self.createReport(json);        
        return report;
    }
    private handleError(error: any, caught: Observable<any>): any{        
        let message = "";
        return Observable.throw(caught);
    }

    private createReport(json: any) {
        let report: Report = {
            id: json.id,
            userName: json.userName,
            creationDate: json.creationDate,
        }
        return report;
    }
}