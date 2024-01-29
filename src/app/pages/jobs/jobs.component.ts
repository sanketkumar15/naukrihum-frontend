import { Component, OnInit } from '@angular/core';
import { JobService } from '../../service/job.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent implements OnInit {
  jobList: any[] = [];
  constructor(
    private jobSer: JobService,
    private router: Router
  ) {

  }
  ngOnInit(): void {
    this.loadJobs();
  }
  loadJobs() {
    this.jobSer.GetActiveJobs().subscribe((res: any) => {
      this.jobList = res.data;
    })
  }
  openJob(id: number) {
    this.router.navigate(['/job-detail', id])
  }
}
