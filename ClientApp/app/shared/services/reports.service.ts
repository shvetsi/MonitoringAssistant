import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, ResponseContentType } from '@angular/http'; 
import 'rxjs/add/operator/map';
import { Report } from '../../shared/models/report';
import { Observable } from 'rxjs/Observable';
import { forEach } from "@angular/router/src/utils/collection";
import { Incident } from '../../shared/models/incident';
import { EnvironmentInfo } from '../../shared/models/environmentInfo';
import { ReportDto } from '../dto/reportDto';
import { IncidentDto } from '../dto/incidentDto';

@Injectable()
export class ReportsService {
    private readonly reportsEndpoint = "/api/reports"
    private readonly filesEndpoint = "/api/files"
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
    
    downloadFile(fileName: string) {
        let result = this.http.get(`${this.filesEndpoint}/${fileName}`).map(res => res.text())
        console.log(result);
        return result;
    }

    uploadFile(reportId: string, incidentId: string, file: File){
        let formData = new FormData()
        formData.append("file", file)
        let result = this.http.post(`${this.filesEndpoint}/${reportId}/${incidentId}`, formData).map(res => res.text())
        console.log(result);
        return result;
    }
    
    saveReport(report: Report){
        console.log(report);
        let reportDto = ReportDto.mapToDto(report)
        this.http.post(this.reportsEndpoint, reportDto)
            .subscribe(res => {
                console.log(`res = ${res.json()}`)
                report.id = res.json()})

        let formData = new FormData();
        report.incidents.forEach(incident => {
                incident.attachments.forEach(file => formData.append("files", file));
                console.log(formData);
                this.http.post(`${this.filesEndpoint}/${report.id}/${incident.id}`, formData)
                    .map(res => res.json).subscribe();
            });
    }

    private extractReports(response: Response){
        console.log(response.json());
        let reportDtos: ReportDto[] = response.json() as ReportDto[];
        let reports = reportDtos.map(r => this.mapFromDto(r))
        console.log(reports);
        return reports;
    }

    private extractReport(response: Response){
        console.log(response.json());
        let reportDto = response.json() as ReportDto;
        let report = this.mapFromDto(reportDto);
        console.log(report);    
        return report;
    }

    mapFromDto(reportDto: ReportDto) {
        let report = ReportDto.mapFromDto(reportDto);
        reportDto.incidents.forEach(i =>
            {
                let incident = IncidentDto.mapFromDto(i);
                i.attachments.forEach(a =>
                {
                    this.downloadFile(a)
                        .subscribe((data) => {
                            incident.attachments.push(data);
                        });
                })
                report.incidents.push(incident);
            })
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