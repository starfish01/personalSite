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

  loading = false;

  addItemCheck = false;

  editDocument: FormGroup;

  constructor(private router: Router, private route: ActivatedRoute, private sitedata: SiteDataService) {

    this.paramsSubscription = this.route.params
      .subscribe(
        (params: Params) => {
          this.documentOn.parent = params['section'];
          if (params['id'] == undefined) {
            this.addItemCheck = true;
            this.initForm();
          } else {
            this.documentOn.id = params['id'];
            this.getDocument()
          }

        }
      );
  }

  ngOnInit() {
  }

  itemObservable: Observable<any>;
  item = {
    title: '',
    icon: '',
    buttonUrl: '',
    description: '',
    enabled: false
  }

  private _subscription:Subscription


  getDocument() {

    this.itemObservable = this.sitedata.getSingleDocument(this.documentOn.parent, this.documentOn.id)
    this._subscription = this.itemObservable.subscribe((data) => {
      this.item = data[0];
      this.initForm();
    })
  }

  displayForm = false;

  private initForm() {

    this.displayForm = true;

    //set values
    let title = this.item.title
    let icon = this.item.icon
    let buttonUrl = this.item.buttonUrl
    let description = this.item.description
    let enabled = this.item.enabled

    this.editDocument = new FormGroup({
      'title': new FormControl(title, [Validators.required]),
      'icon': new FormControl(icon, [Validators.required]),
      'buttonUrl': new FormControl(buttonUrl),
      'description': new FormControl(description),
      'enabled': new FormControl(enabled)
    })
  }

  cancel() {
    this.router.navigate(['/admin/overview', this.documentOn.parent])
  }

  submit() {
    this.loading = true;

    if (this.addItemCheck) {
      this.sitedata.addItem(this.documentOn.parent, this.editDocument.value).then((data) => {
        this.router.navigate(['/admin/overview', this.documentOn.parent])
      }).catch(() => {
        this.loading = false;
        console.log('something broke')
      })

    } else {
      this.sitedata.updateDocument(this.editDocument.value, this.documentOn).then((data) => {
        this.router.navigate(['/admin/overview', this.documentOn.parent])
      }).catch(() => {
        this.loading = false;
        console.log('Something Broke...')
      })
    }
  }

  deleteItem(){
    this.loading = true;
    this._subscription.unsubscribe();
    this.sitedata.deleteItem(this.documentOn.id,this.documentOn.parent).then((data)=>{
      this.router.navigate(['/admin/overview', this.documentOn.parent])
    }).catch(()=>{
      console.log('something broke')
      this.loading = false;
    })
  }

}
