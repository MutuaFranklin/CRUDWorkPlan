import { HttpClient, HttpClientModule, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WorkplanService {
  apiUrl: string = environment.URL;
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});


  constructor(private http: HttpClient) {

  }

  workPlan():Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl + 'workplan/')
  }


  workPlanGoal(id:any):Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl + `workplan-goal/${id}`)
  }


  postWorkPlanGoal(goalDetails:any){
    return this.http.post<any[]>(this.apiUrl + 'workplan/', goalDetails )
  }

  updateWorkPlanGoal(goalDetails:any, id:any):Observable<any>{
    return this.http.put<any[]>(this.apiUrl + `workplan-goal/${id}`, goalDetails, {headers: this.httpHeaders})

  }

  deleteWorkPlanGoal(id:any):Observable<any>{
    let endpoint = this.apiUrl+ `workplan-goal/${id}`
    return this.http.delete(endpoint)

  }}
