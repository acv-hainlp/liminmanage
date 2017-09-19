import { Subscription } from 'rxjs/Subscription';
import { Student } from '../../../shared/models/student';
import { StudentService } from './../../../shared/services/student.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit, OnDestroy {
  students: Student[];
  subcription: Subscription;

  constructor(private studentService: StudentService) {
    this.subcription = this.studentService.getAll().subscribe(students => this.students = students);
   }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subcription.unsubscribe();
  }
}
