import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/core/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  isAuthenticated(){
    return this.authService.isAuthenticated();
  }

  logout() {
    this.authService.doLogout();
  }

}
