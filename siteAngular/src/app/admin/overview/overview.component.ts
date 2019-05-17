import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { SiteDataService } from 'src/app/shared/site-data.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  

  pageOn: {title:string}
  paramsSubscription: Subscription

  constructor(private route: ActivatedRoute,private sitedata: SiteDataService) {}


  ngOnInit() {

    this.pageOn = {
      title: this.route.snapshot.params['id']
    }

   this.paramsSubscription = this.route.params
   .subscribe(
     (params: Params) => {
       this.pageOn.title = params['id'];
       }
   );
   this.getProjects()

  }

  projects: Observable<any[]>;

  getProjects(){
    console.log('yes')
    this.projects = this.sitedata.getProjects();
  }

}
