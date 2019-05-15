import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private authService:AuthService,private router: Router,  ) { }

  ngOnInit() {
  }

  logout(){
    this.authService.doLogout().then((data)=>{
      this.router.navigate(['/login']);
    });
  }

}
