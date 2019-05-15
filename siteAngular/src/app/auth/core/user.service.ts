import { Injectable } from "@angular/core";
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class UserService {

  constructor(
    //  public db: AngularFirestore,
    public afAuth: AngularFireAuth,
    private afs: AngularFirestore
  ) {
  }

  getCurrentUserID() {
    let user = firebase.auth().currentUser.uid;
    return user;
  }

  getCurrentUser() {
    return new Promise<any>((resolve, reject) => {
      var user = firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          resolve(user);
        } else {
          reject('No user logged in');
        }
      })
    })
  }

  getCurrentUserAuthLevel() {
    this.afs.collection('users').ref.get().then((data) => {
      //console.log(data)
      return data
    }).catch(()=>{
      console.log('error')
    })

  }


  updateCurrentUser(value) {
    return new Promise<any>((resolve, reject) => {
      var user = firebase.auth().currentUser;
      user.updateProfile({
        displayName: value.name,
        photoURL: user.photoURL
      }).then(res => {
        resolve(res)
      }, err => reject(err))
    })
  }
}