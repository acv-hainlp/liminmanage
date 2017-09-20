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
  studentsId = [];
  studentsName = [];

  students$;
  courses$;
  teachers$;

  constructor(private courseService: CourseService, private studentService: StudentService ) {
    this.courses$ = courseService.getAll();
    this.teachers$ = studentService.getTeacher();
    this.students$ = studentService.getAll();
   }
   
  save() {

  }

  addStudent(studentId, studentName){
    this.studentsId.push(studentId);
    this.studentsName.push(studentName);
    // JSON.stringify(this.students);
    // console.log(this.studentsId);
    // console.log(this.studentsName);
  }

  removeStudent(index)
  {
    this.studentsId.splice(index, 1);
    this.studentsName.splice(index, 1);
  }
  ngOnInit() {
  }

}
