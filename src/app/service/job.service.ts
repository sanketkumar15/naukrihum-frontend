import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  apiEndPoint : string='https://freeapi.miniprojectideas.com/api/JobPortal/';

  constructor(private http: HttpClient) { }
  registerEmployer(obj:any){
    return this.http.post(this.apiEndPoint+'AddNewEmployer',obj)
  }
  registerAsJobSeeker(obj:any){
    return this.http.post(this.apiEndPoint+'AddNewJobSeeker',obj)
  }
  getAllCategory(){
   return  this.http.get(this.apiEndPoint+ 'GetAllJobCategory')
    
  }
  createNewJob(obj:any){
    return this.http.post(this.apiEndPoint+'CreateNewJobListing',obj)
  }
  GetActiveJobs(){
    return this.http.get(this.apiEndPoint+'GetActiveJobListing')
  }
  GetJobListingById(jobid:number){
    return this.http.get(this.apiEndPoint+'GetJobListingById?jobId=' +jobid)
  }
}
