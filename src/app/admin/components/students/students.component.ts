import { Subscription } from 'rxjs/Subscription';
import { Student } from '../../../shared/models/student';
import { StudentService } from './../../../shared/services/student.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataTableResource } from 'angular-4-data-table';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit, OnDestroy {
  students: Student[];
  subcription: Subscription;

  tableResource: DataTableResource<Student>;
  items: Student[] = [];
  itemCount: number;

  constructor(private studentService: StudentService) {
    this.subcription = this.studentService.getAll().subscribe(students => {
      this.students = students;
      this.initializeTable(students);
    });
   }

  private initializeTable(students: Student[]) {
    this.tableResource = new DataTableResource(students);
    this.tableResource.query({ offset: 0}).then(items => this.items = items); //offset: cut {{number}} row first
    this.tableResource.count().then(count => this.itemCount = count);
  }

  reloadItems(param) {
    if (!this.tableResource) return;
    this.tableResource.query(param).then(items => this.items = items);
  }

  filter(query: string) {
    let filteredStudent = (query) ? 
      this.students.filter(c => c.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())) : this.students; //if !(query) return filtercosres else return filterCouses with logic

      this.initializeTable(filteredStudent);
      //Logic Filter: getAll query => save to filter & course => if (!query) return students else return filtercourse with query
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subcription.unsubscribe();
  }
}
