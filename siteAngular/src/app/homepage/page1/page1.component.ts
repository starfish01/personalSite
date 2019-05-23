import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  clicks = 0

  login(){
    this.clicks ++;

    if(this.clicks == 7){
      this.router.navigate(['admin'])
    }

  }

}
