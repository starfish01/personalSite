import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocumentTypesService {

  listOfPages = ['projects', 'courses']

  constructor() { }

  doesPageExist(pageSearch) {

    if(this.listOfPages.findIndex(page => page === pageSearch) == -1){
      return false
    } else {
      return true
    }

  }


}
