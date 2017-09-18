import { CourseService } from './../course.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit, OnDestroy  {
  courses: {title: string}[]; // for filter title of all courses
  filteredCourse: any[]; // save all course in here to return
  subcription: Subscription; // create to destroy

  constructor(private courseService : CourseService) {
      this.subcription = courseService.getAll().subscribe(courses => this.filteredCourse =  this.courses = courses); //getall course to subcrition to destroy
    }

  filter(query: string) {
    this.filteredCourse = (query) ? 
      this.courses.filter(c => c.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())) : this.courses; //if !(query) return filtercosres else return filterCouses with logic

      //Logic Filter: getAll query => save to filter & course => if (!query) return fitlercourse else return filtercourse with query
  }

  ngOnDestroy() {
    this.subcription.unsubscribe(); //destroy when switch component
  }

  ngOnInit() {
  }

}
