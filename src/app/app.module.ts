import { ClassService } from './shared/services/class.service';
import { ObjectNgFor } from './objectNgFor.pipe';
import { StudentService } from './shared/services/student.service';
import { CourseService } from './shared/services/course.service';
import { AdminAuthGuard } from './admin/services/admin-auth-guard.service';
import { UserService } from './shared/services/user.service';
import { AuthGuard } from './shared/services/auth-guard.service';
import { AuthService } from './shared/services/auth.service';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { DataTableModule} from 'angular-4-data-table';

import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { HomeComponent } from './core/components/home/home.component';
import { StudentsComponent } from './admin/components/students/students.component';
import { CoursesComponent } from './admin/components/courses/courses.component';
import { BillsComponent } from './admin/components/bills/bills.component';
import { LoginComponent } from './core/components/login/login.component';
import { CourseFormComponent } from './admin/components/course-form/course-form.component';
import { ClassComponent } from './admin/components/class/class.component';
import { StudentFormComponent } from './admin/components/student-form/student-form.component';
import { ClassFormComponent } from './admin/components/class-form/class-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    StudentsComponent,
    CoursesComponent,
    BillsComponent,
    LoginComponent,
    CourseFormComponent,
    ClassComponent,
    StudentFormComponent,
    ClassFormComponent,
    ObjectNgFor
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    FormsModule,
    CustomFormsModule,
    DataTableModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, canActivate:[AuthGuard, AdminAuthGuard] },
      { path: 'students', component: StudentsComponent, canActivate:[AuthGuard, AdminAuthGuard]},
      { path: 'students/new', component: StudentFormComponent, canActivate:[AuthGuard, AdminAuthGuard]},
      { path: 'students/:id', component: StudentFormComponent, canActivate:[AuthGuard, AdminAuthGuard]},
      { path: 'class', component: ClassComponent, canActivate:[AuthGuard, AdminAuthGuard]},
      { path: 'class/new', component: ClassFormComponent, canActivate:[AuthGuard, AdminAuthGuard]},
      { path: 'courses/new', component: CourseFormComponent, canActivate:[AuthGuard, AdminAuthGuard]},
      { path: 'courses/:id', component: CourseFormComponent, canActivate:[AuthGuard, AdminAuthGuard]},
      { path: 'courses', component: CoursesComponent, canActivate:[AuthGuard, AdminAuthGuard]},
      { path: 'bills', component: BillsComponent, canActivate:[AuthGuard, AdminAuthGuard]},
      { path: 'login', component: LoginComponent }
    ])
  ],
  providers: [
    AuthService,
    AuthGuard,
    UserService,
    CourseService,
    AdminAuthGuard,
    StudentService,
    ClassService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
