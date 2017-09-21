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
    let addStudent = {}; //create new object
    this.formStudents.forEach(student => { //foreach list student
      addStudent[student.id] = student.price; // add new property for object
    });

    form["students"] = addStudent; //add all student to form with key student
    this.classService.create(form);
    this.router.navigate(['/class']);

  }

  addStudent(studentId, studentName, price){
    let temp = {id : studentId, name: studentName, price: price };
    this.formStudents.push(temp);
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
      totalPrice += student.price;
    });
    this.totalPrice = totalPrice;
  }

  filter(query: string) {
    this.filteredStudents = (query) ? 
      this.students.filter(c => c.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())) : this.students; //if !(query) return filtercosres else return filterCouses with logic
      //Logic Filter: getAll query => save to filter & course => if (!query) return students else return filtercourse with query
  }
}
