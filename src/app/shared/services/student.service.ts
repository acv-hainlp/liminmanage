import { query } from '@angular/core/src/animation/dsl';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class StudentService {
  
  constructor(private db: AngularFireDatabase ) { }

  create(student) {
    student.createOn =  Date.now();
    for (let key in student) {
      let value = student[key];
      if (!value) delete student[key];
    }
    
    this.db.list('/students').push(student);
  }

  getAll() {
    return this.db.list('/students', {query: {orderByChild:'name'}});
  }

  get(studentId) {
    return this.db.object('/students/' + studentId);
  }

  update(studentId, student){
    student.updateOn =  Date.now();
    
    for (let key in student) {
      let value = student[key];
      if (!value) delete student[key];
    }

    return this.db.object('/students/' + studentId).update(student);
  }

  delete(studentId) {
    return this.db.object('/students/' + studentId).remove();
  }

  getTeacher() {
    return this.db.list('/students', {
      query: {
        orderByChild: 'isTeacher',
        equalTo: true
      }});
  }

}
