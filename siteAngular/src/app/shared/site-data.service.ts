import { Injectable } from '@angular/core';

import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subscription, Observable } from 'rxjs';
import { resolve } from 'q';



@Injectable({
  providedIn: 'root'
})
export class SiteDataService {

  constructor(private db: AngularFirestore) { }

  // projects: Observable<any[]>;

  getProjects() {
    return this.db.collection('projects').valueChanges();
  }

  getEdits(value) {
    return this.db.collection(value).valueChanges();
  }

  getSingleDocument(section, document) {
    return this.db.collection(section, ref => ref.where('id', '==', document).limit(1)).valueChanges();
  }

  updateDocument(document, documentDetails) {
    return new Promise((resolve, reject) => {
      this.db.collection(documentDetails.parent).doc(documentDetails.id).update(document).then(() => {
        resolve();
      })
    })
  }

  addItem(section, documentDetails) {
    return new Promise((resolve,rej)=>{
      documentDetails.id = this.db.createId();
      this.db.collection(section).doc(documentDetails.id).set(documentDetails, {merge:true}).then(()=>{
        resolve();
      })
    })
  }

  deleteItem(idOfDocument,collection){
    return new Promise((res,rej)=>{
      this.db.collection(collection).doc(idOfDocument).delete().then((data)=>{
        res();
      }).catch(()=>{
        console.log('something broke')
      })
    })
  }


}
