import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class ClassService {

  constructor(private db: AngularFireDatabase) { }

  create(classes) {
    classes.createOn = Date.now();
    for (let key in classes) {
      let value = classes[key];
      if (!value) delete classes[key];
    }
    this.db.list('/classes').push(classes);
  }
}
