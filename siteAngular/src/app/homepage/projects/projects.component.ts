import { Component, OnInit } from '@angular/core';

import { SiteDataService } from '../../shared/site-data.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(private siteData:SiteDataService) { }

  ngOnInit() {
    this.getProjects();
  }

  projects: Observable<any[]>;

  getProjects(){
    this.projects = this.siteData.getProjects();
  }


}
