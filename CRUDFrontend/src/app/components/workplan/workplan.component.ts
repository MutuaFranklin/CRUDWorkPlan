import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Workplan } from 'src/app/models/workplan';
import { WorkplanService } from 'src/app/services/workplan.service';


@Component({
  selector: 'app-workplan',
  templateUrl: './workplan.component.html',
  styleUrls: ['./workplan.component.css']
})
export class WorkplanComponent implements OnInit {

  workplan_goals!:Workplan[];
  error: any;
  single_goal:any;
  workplan:any;


  constructor(
    private http: HttpClient,
    private workplanService: WorkplanService,
    private router: Router,


  )

  { }

  ngOnInit(){
    this.workplan = {
      goal: '',
      objectives: '',
      start_time: Date,
      end_time: Date,
      resources: '',
      strategy: '',
      created_at:Date,

    };

    let promise = new Promise <void> ((resolve,reject)=>{
      this.workplanService.workPlan().toPromise().then(
        (response:any) => {
          // console.log(response)
        this.workplan_goals = response;
        resolve()
      },
      (error:string) => {

      })
    })
    return promise
  }

  viewGoal(id: any){
    this.router.navigate(['/workplan-goal',id])
  }




  publishWorkPlan(){

    this.workplanService.postWorkPlanGoal(this.workplan).subscribe( response => {
      console.log(response)
      alert("New workplan goal has been published"),
      window.location.reload();



    },

    error => {
      this.error = error
      console.log('error',error)
    }
    );

  }

}
