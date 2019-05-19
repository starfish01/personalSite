import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { SiteDataService } from 'src/app/shared/site-data.service';
import { DocumentTypesService } from 'src/app/shared/document-types.service';

import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';



@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {


//example
movies = [
  'Episode I - The Phantom Menace',
  'Episode II - Attack of the Clones',
  'Episode III - Revenge of the Sith',
  'Episode IV - A New Hope',
  'Episode V - The Empire Strikes Back',
  'Episode VI - Return of the Jedi',
  'Episode VII - The Force Awakens',
  'Episode VIII - The Last Jedi'
];

drop(event: CdkDragDrop<string[]>) {
  moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
}






  pageOn: { title: string }
  paramsSubscription: Subscription

  constructor(private documentTypeService: DocumentTypesService ,private router: Router,private route: ActivatedRoute, private sitedata: SiteDataService) { }


  ngOnInit() {

    this.pageOn = {
      title: this.route.snapshot.params['id']
    }

    this.paramsSubscription = this.route.params
      .subscribe(
        (params: Params) => {
          this.pageOn.title = params['id'];

          this.checkDocument();


          this.getProjects();
        }
      );
  }

  checkDocument(){
    if(this.documentTypeService.doesPageExist(this.pageOn.title)){
      return
    }else{
      this.router.navigate(['/admin']);
    }
  }

  projects: Observable<any[]>;

  getProjects() {
    this.projects = this.sitedata.getEdits(this.pageOn.title);
  }

}
