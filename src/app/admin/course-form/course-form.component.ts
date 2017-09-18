import { CourseService } from './../../course.service';
import { AuthService } from './../../auth.service';
import { AppUser } from './../../models/app-user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent {
  // appUser: AppUser;

  constructor(private courseService: CourseService) {
    // auth.appUser$.subscribe(appUser => this.appUser = appUser)
   }

   save(course)
   {
      console.log(course);
    this.courseService.create(course);
   }

}
