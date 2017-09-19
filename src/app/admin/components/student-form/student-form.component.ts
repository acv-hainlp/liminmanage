import { Student } from './../../../shared/models/student';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentService } from './../../../shared/services/student.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/take'; 

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  student: any = {};
  id;

  constructor(private studentService: StudentService, private router: Router, route: ActivatedRoute) {
    this.id = route.snapshot.paramMap.get('id');
    if(this.id) studentService.get(this.id).take(1).subscribe(student => this.student = student);
   }

  ngOnInit() {
  }

  save(student:Student) {
    if(this.id) this.studentService.update(this.id, student); else this.studentService.create(student);
    this.router.navigate(['/students']);
  }

}
