import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import { CoursesComponent } from './courses/courses.component';
import { TeachersComponent } from './teachers/teachers.component';
import { BillsComponent } from './bills/bills.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { LoginComponent } from './login/login.component';

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
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'students', component: StudentsComponent },
      { path: 'courses', component: CoursesComponent},
      { path: 'teachers', component: TeachersComponent },
      { path: 'bills', component: BillsComponent },
      { path: 'login', component: LoginComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
