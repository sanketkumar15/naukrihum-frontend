import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from '../../service/job.service';

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [],
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.css'
})
export class JobDetailsComponent {
  activeJobId:number=0;
  jobObj:any
  constructor(private activateRoute: ActivatedRoute,private jobSrc:JobService){
    this.activateRoute.params.subscribe((res:any)=>{
      debugger;
      this.activeJobId=res.jobid;
      this.getJobDetail();
    })
  }
  getJobDetail(){
    this.jobSrc.GetJobListingById(this.activeJobId).subscribe((Res:any)=>{
      this.jobObj=Res.data;
    })
  }

}
