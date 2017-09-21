import { Router } from '@angular/router';
import { ClassService } from './../../../shared/services/class.service';
import { forEach } from '@angular/router/src/utils/collection';
import { element } from 'protractor';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { StudentService } from '../../../shared/services/student.service';
import { CourseService } from './../../../shared/services/course.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-class-form',
  templateUrl: './class-form.component.html',
  styleUrls: ['./class-form.component.css']
})
export class ClassFormComponent implements OnInit {
  // students: any = {};
  // studentsId = [];
  // studentsName = [];
  students = [];
  totalPrice: number;

  students$;
  courses$;
  teachers$;

  constructor(private courseService: CourseService, private studentService: StudentService, private classService: ClassService, private router: Router ) {
    this.courses$ = courseService.getAll();
    this.teachers$ = studentService.getTeacher();
    this.students$ = studentService.getAll();
   }
   
  save(form) {
    let addStudent = {}; //create new object
    this.students.forEach(student => { //foreach list student
      addStudent[student.id] = student.price; // add new property for object
    });

    form["students"] = addStudent; //add all student to form with key student
    this.classService.create(form);
    this.router.navigate(['/class']);

  }

  addStudent(studentId, studentName, price){
    let temp = {id : studentId, name: studentName, price: price };
    this.students.push(temp);
    this.caculatePrice();
    
    // this.studentsName.push(studentName);
    // JSON.stringify(this.students);
  }

  removeStudent(studentId)
  {
    this.students.splice(studentId,1);
    this.caculatePrice();
    // delete this.students[studentId];
    // this.studentsId.splice(index, 1);
    // this.studentsName.splice(index, 1);
  }
  ngOnInit() {
  }

  caculatePrice(){
    let totalPrice: number = 0;
    this.students.forEach(student => {
      totalPrice += student.price;
    });
    this.totalPrice = totalPrice;
  }

  filter(query: string) {
    console.log(query);
  }
}
