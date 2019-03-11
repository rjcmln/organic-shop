import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { CanActivate } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(private authService: AuthService, private userService: UserService) { }

  canActivate(): Observable<boolean> {
    return this.authService.user$
      .pipe(switchMap(firebaseUser => this.userService.get(firebaseUser.uid)))
      .pipe(map(appUser => appUser.isAdmin));
  }
}
