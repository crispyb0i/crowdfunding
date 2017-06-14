import { Injectable } from '@angular/core';
import { Donator } from './donator.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class DonatorService {
  donators: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {this.donators = database.list('donators');
  }

    getDonators(){
    return this.donators;
  }
}
