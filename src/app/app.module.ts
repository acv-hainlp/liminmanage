import { CourseService } from './course.service';
import { AdminAuthGuard } from './admin-auth-guard.service';
import { UserService } from './user.service';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import { CoursesComponent } from './courses/courses.component';
import { TeachersComponent } from './teachers/teachers.component';
import { BillsComponent } from './bills/bills.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { LoginComponent } from './login/login.component';
import { CourseFormComponent } from './admin/course-form/course-form.component';
import { ClassComponent } from './class/class.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    StudentsComponent,
    CoursesComponent,
    TeachersComponent,
    BillsComponent,
    AdminUsersComponent,
    LoginComponent,
    CourseFormComponent,
    ClassComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, canActivate:[AuthGuard, AdminAuthGuard] },
      { path: 'students', component: StudentsComponent, canActivate:[AuthGuard, AdminAuthGuard]},
      { path: 'class', component: ClassComponent, canActivate:[AuthGuard, AdminAuthGuard]},
      { path: 'courses/new', component: CourseFormComponent, canActivate:[AuthGuard, AdminAuthGuard]},
      { path: 'courses', component: CoursesComponent, canActivate:[AuthGuard, AdminAuthGuard]},
      { path: 'teachers', component: TeachersComponent, canActivate:[AuthGuard, AdminAuthGuard]},
      { path: 'bills', component: BillsComponent, canActivate:[AuthGuard, AdminAuthGuard]},
      { path: 'login', component: LoginComponent }
    ])
  ],
  providers: [
    AuthService,
    AuthGuard,
    UserService,
    CourseService,
    AdminAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
