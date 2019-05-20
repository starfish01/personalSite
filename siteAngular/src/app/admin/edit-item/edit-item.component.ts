import { Component, OnInit } from '@angular/core';
import { SiteDataService } from 'src/app/shared/site-data.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit {

  docToEdit = {};
  paramsSubscription: Subscription;
  documentOn = {
    id: null,
    parent: null
  }
  
  editDocument: FormGroup;

  constructor(private router: Router, private route: ActivatedRoute, private sitedata: SiteDataService) {
    this.docToEdit = sitedata.getSingleDocument('projects', 'DJldi777MzhO4AbJhSDNl62')

    this.paramsSubscription = this.route.params
      .subscribe(
        (params: Params) => {
          this.documentOn.parent = params['section'];
          this.documentOn.id = params['id'];
          this.getDocument()
          this.initForm();
        }
      );
  }

  ngOnInit() {
  }

  projects: Observable<any>;

  getDocument() {

    this.projects = this.sitedata.getSingleDocument(this.documentOn.parent, this.documentOn.id)

    // this.projects = this.sitedata.getEdits(this.pageOn.title);

    // this.projects.subscribe((projectData: [])=>{
    //   this.listProjects = projectData
    // });

  }


  private initForm() {
    //set values
    let title = ''
    //etc

    this.editDocument = new FormGroup({
      'name': new FormControl(title,[Validators.required])
    })
    
  }



}
