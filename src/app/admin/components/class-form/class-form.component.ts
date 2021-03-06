import { Subscription } from 'rxjs/Subscription';
import { Student } from './../../../shared/models/student';
import { Router } from '@angular/router';
import { ClassService } from './../../../shared/services/class.service';
import { forEach } from '@angular/router/src/utils/collection';
import { element } from 'protractor';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { StudentService } from '../../../shared/services/student.service';
import { CourseService } from './../../../shared/services/course.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import 'rxjs/operator/take';

@Component({
  selector: 'app-class-form',
  templateUrl: './class-form.component.html',
  styleUrls: ['./class-form.component.css']
})
export class ClassFormComponent implements OnInit, OnDestroy {
  formStudents: any = [];
  // studentsId = [];
  // studentsName = [];
  students: Student[];
  totalPrice: number;

  studentsSubcription : Subscription;
  filteredStudents: any[];
  courses$;
  teachers$;

  constructor(private courseService: CourseService, private studentService: StudentService, private classService: ClassService, private router: Router ) {
    this.courses$ = courseService.getAll();
    this.teachers$ = studentService.getTeacher();
    this.studentsSubcription = this.studentService.getAll().subscribe(students => this.filteredStudents = this.students = students);

   }
   
  save(form) {
    let formStudents = {};
    for (let i = 0; i < this.formStudents.length; ++i) {
      formStudents[this.formStudents[i].$key] = this.formStudents[i];
    }

    form["students"] = formStudents;
    form["totalPrice"] = this.totalPrice; //add all student to form with key student
    this.studentService.get(form.teacher).take(1).subscribe(t=> form["teacher"] = t)
    this.courseService.get(form.course).take(1).subscribe(c=> form["course"] = c)

    console.log(form);
    this.classService.create(form);
    this.router.navigate(['/class']);

  }

  addStudent(student: Student, price){
    student['price'] = price;
    this.formStudents.push(student);
    // console.log(this.formStudents);
    this.caculatePrice();
    
    // this.studentsName.push(studentName);
    // JSON.stringify(this.students);
  }

  removeStudent(studentId)
  {
    this.formStudents.splice(studentId,1);
    this.caculatePrice();
    // delete this.students[studentId];
    // this.studentsId.splice(index, 1);
    // this.studentsName.splice(index, 1);
  }
  ngOnInit() {
  }

  ngOnDestroy() {
    this.studentsSubcription.unsubscribe();
  }

  caculatePrice(){
    let totalPrice: number = 0;
    this.formStudents.forEach(student => {
      totalPrice += student['price'];
    });
    this.totalPrice = totalPrice;
  }

  filter(query: string) {
    this.filteredStudents = (query) ? 
      this.students.filter(c => c.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())) : this.students; //if !(query) return filtercosres else return filterCouses with logic
      //Logic Filter: getAll query => save to filter & course => if (!query) return students else return filtercourse with query
  }
}
