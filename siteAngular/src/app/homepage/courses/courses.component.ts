import { Component, OnInit } from '@angular/core';
import { SiteDataService } from 'src/app/shared/site-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  constructor(private siteData:SiteDataService) { }

  ngOnInit() {
    this.getCourses()
  }

  courses: Observable<any[]>;

  getCourses(){
    this.courses = this.siteData.getCourses()
  }

}
