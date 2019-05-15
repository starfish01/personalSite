import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/core/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss', './dist/css/skins/_all-skins.min.css', './dist/css/AdminLTE.min.css'
  , "./bower_components/bootstrap/dist/css/bootstrap.min.css"
    , "./bower_components/font-awesome/css/font-awesome.min.css"
    , "./bower_components/Ionicons/css/ionicons.min.css"
    , "./bower_components/jvectormap/jquery-jvectormap.css"
    ]
})
export class AdminComponent implements OnInit {




  constructor(private authService: AuthService, private router: Router, ) { }

  ngOnInit() {
  }

  logout() {
    this.authService.doLogout().then((data) => {
      this.router.navigate(['/login']);
    });
  }

}
