import { Injectable } from '@angular/core';

import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SiteDataService {

  constructor(   private db: AngularFirestore   ) {}
  
  // projects: Observable<any[]>;

  getProjects() {
    return this.db.collection('projects').valueChanges();
  }

  getEdits(value){
    return this.db.collection(value).valueChanges();
  }


}
