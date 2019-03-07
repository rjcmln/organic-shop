import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private userService: UserService, private authService: AuthService, private router: Router) {
    authService.user$.subscribe(user => {
      if (user) {
        userService.save(user); // Update each time user logs in because user may change the name outside the scope of our app

        let returnUrl = localStorage.getItem('returnUrl');
        router.navigateByUrl(returnUrl);
      }
      else {
        router.navigateByUrl('/');
      }
    });
  }
}
