import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class CourseService {

  constructor(private db: AngularFireDatabase, private router: Router) { }

  create(course) {
    this.db.list('/courses').push(course);
    this.router.navigate(['/courses']);
  }

}
