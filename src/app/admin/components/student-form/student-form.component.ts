import { Router } from '@angular/router';
import { StudentService } from './../../../shared/services/student.service';
import { Student } from '../../../shared/models/student';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit() {
  }

  save(student:Student) {
    this.studentService.create(student);
    this.router.navigate(['/students']);
  }

}
