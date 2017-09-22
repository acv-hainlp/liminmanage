import { Router } from '@angular/router';
import { DataTableResource } from 'angular-4-data-table';
import { Subscription } from 'rxjs/Subscription';
import { MyClass } from './../../../shared/models/myclass';
import { ClassService } from './../../../shared/services/class.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit, OnDestroy {
  classes: MyClass[];
  classesSubcription: Subscription;
  
  tableResource: DataTableResource<MyClass>;
  items: MyClass[] = [];
  itemCount: number;

  constructor(private classService: ClassService, private router: Router) {
    this.classesSubcription = this.classService.getAll().subscribe(c=> {
      this.classes = c;
      this.initializeTable(c);
    });
  }

  private initializeTable(classes: MyClass[]) {
    this.tableResource = new DataTableResource(classes);
    this.tableResource.query({ offset: 0}).then(items => this.items = items); //offset: cut {{number}} row first
    this.tableResource.count().then(count => this.itemCount = count);
  }

  reloadItems(param) {
    if (!this.tableResource) return;
    this.tableResource.query(param).then(items => this.items = items);
  }

  ngOnInit() {
  }

  delete(classId){
    if(!confirm('Bạn chắc chắn muốn xóa khóa học này ?')) return;
        this.classService.delete(classId);
        this.router.navigate(['/class']);
  }

  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.classesSubcription.unsubscribe();
  }

}
