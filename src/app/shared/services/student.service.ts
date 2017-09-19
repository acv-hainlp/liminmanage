import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class StudentService {
  
  constructor(private db: AngularFireDatabase ) { }

  create(student) {
    this.db.list('/students').push(student);
  }

  getAll() {
    return this.db.list('/students');
  }

  get(studentId) {
    return this.db.object('/students/' + studentId);
  }

  update(studentId, student){
    return this.db.object('/students/' + studentId).update(student);
  }

}
