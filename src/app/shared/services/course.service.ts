import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class CourseService {

  constructor(private db: AngularFireDatabase) { }

  create(course) {
    this.db.list('/courses').push(course);
  }

  getAll(){
    return this.db.list('/courses');
  }

  get(coursesId){
    return this.db.object('/courses/' + coursesId);
  }

  update(coursesId, course) {
    return this.db.object('/courses/' + coursesId).update(course);
  }

  delete(coursesId) {
    return this.db.object('/courses/' + coursesId).remove();
  }

}
