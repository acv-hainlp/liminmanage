import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from './../../course.service';
import { AuthService } from './../../auth.service';
import { AppUser } from './../../models/app-user';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/take'; //on Destroy => unsubcribe

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent {
  course = {};
  // appUser: AppUser;

  constructor(private courseService: CourseService, private route: ActivatedRoute, private router: Router) {
    // auth.appUser$.subscribe(appUser => this.appUser = appUser)
    let id = this.route.snapshot.paramMap.get('id'); // get id from url
    if (id) this.courseService.get(id).take(1).subscribe(c => this.course = c); //if url have id => find in db => return
   }

   save(course)
   {
      this.courseService.create(course);
      this.router.navigate(['/courses']);
   }

}
