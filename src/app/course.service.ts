import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class CourseService {

  constructor(private db: AngularFireDatabase) { }

  create(course) {
    this.db.list('/courses').push(course);
  }

}
