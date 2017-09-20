import { StudentService } from '../../../shared/services/student.service';
import { CourseService } from './../../../shared/services/course.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-class-form',
  templateUrl: './class-form.component.html',
  styleUrls: ['./class-form.component.css']
})
export class ClassFormComponent implements OnInit {
  courses$;
  teachers$;

  constructor(private courseService: CourseService, private studentService: StudentService) {
    this.courses$ = courseService.getAll();
    this.teachers$ = studentService.getTeacher();
   }


   ngOnInit() {
  }

}
