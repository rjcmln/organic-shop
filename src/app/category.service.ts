import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db:AngularFireDatabase) { }

  getCategories () {
    // It doesn't return a key
    //return this.db.list('/categories', ref => ref.orderByChild('name')).valueChanges();

    // It returns a key, data is inside the payload
    return this.db.list('/categories', ref => ref.orderByChild('name')).snapshotChanges();
  }
}