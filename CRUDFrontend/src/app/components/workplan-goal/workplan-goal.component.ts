import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Workplan } from 'src/app/models/workplan';
import { WorkplanService } from 'src/app/services/workplan.service';
import { Location } from '@angular/common';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-workplan-goal',
  templateUrl: './workplan-goal.component.html',
  styleUrls: ['./workplan-goal.component.css']
})
export class WorkplanGoalComponent implements OnInit {

  single_goal:any;
  error:any;
  workplan:any;

  editWorkPlanForm = new FormGroup({
    goal: new FormControl(''),
    objectives: new FormControl(''),
    start_time: new FormControl(''),
    end_time: new FormControl(''),
    strategy: new FormControl(''),
    resources: new FormControl(''),


  });

  constructor(
    private http: HttpClient,
    private workplanService: WorkplanService,
    private router: Router,
    private route:ActivatedRoute,
    private location: Location,




  )

  { }
  ngOnInit(): void {

    let id = this.route.snapshot.paramMap.get('id');

    let promise = new Promise <void> ((resolve,reject)=>{
      this.workplanService.workPlanGoal(id).toPromise().then(
        (response:any) => {
          // console.log(response)
          this.single_goal = response
        resolve()
      },

      (error:string) => {

      })
    })
  }

  EditWorkPlan(){
    let id = this.route.snapshot.paramMap.get('id');
    this.workplanService.updateWorkPlanGoal(this.workplan, id).subscribe( response => {
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

  deleteWorkPlan(){
    let id = this.route.snapshot.paramMap.get('id');
    if(confirm("Are you sure you want to delete?")){
      this.workplanService.deleteWorkPlanGoal(id).subscribe(data => {
        alert("WorkPlan item deleted successfully")
        this.router.navigate(['workplan']);

        // console.log(data)

      }, (error: any)=> {

        console.log(error);
      })
    }


  }


  goBack() {
    this.location.back();
  }



}
