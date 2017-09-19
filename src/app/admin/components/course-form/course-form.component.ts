import { Course } from '../../../shared/models/course';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../../../shared/services/course.service';
import { AuthService } from '../../../shared/services/auth.service';
import { AppUser } from '../../../shared/models/app-user';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/take'; //on Destroy => unsubcribe

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent {
  course:any = {};
  id;
  // appUser: AppUser;

  constructor(private courseService: CourseService, private route: ActivatedRoute, private router: Router) {
    // auth.appUser$.subscribe(appUser => this.appUser = appUser)
    this.id = this.route.snapshot.paramMap.get('id'); // get id from url
    if (this.id) this.courseService.get(this.id).take(1).subscribe(c => this.course = c); //if url have id => find in db => return
    
   }

   save(course)
   {
      if(this.id) this.courseService.update(this.id, course) // if id!=null => update, else create
      else this.courseService.create(course);
      this.router.navigate(['/courses']);
   }

   delete(id) {
      if(!confirm('Bạn chắc chắn muốn xóa khóa học này ?')) return;

      this.courseService.delete(this.id);
      this.router.navigate(['/courses']);
   }

}
