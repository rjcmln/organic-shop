import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {

  constructor(private afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(firebaseUser => console.log(firebaseUser));
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
