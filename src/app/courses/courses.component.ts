import { CourseService } from './../course.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses$;

  constructor(private courseService : CourseService) {
      this.courses$ = courseService.getAll();
    }

  ngOnInit() {
  }

}
