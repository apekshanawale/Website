import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {RouterModule,Routes} from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { TeamComponent } from './pages/team/team.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ComputerComponent } from './pages/computer/computer.component';

const appRoutes: Routes = [

	 { path: '', redirectTo: "/Home", pathMatch : "full" },
	// { path: 'Home', component: HomeComponent },
	 //{ path: '', component: HomeComponent },
	 { path: 'AboutUs', component:AboutUsComponent },
	 { path: 'Courses', component: CoursesComponent },
	 { path: 'Team', component: TeamComponent },
	 { path: 'ContactUs', component: ContactUsComponent },
	 { path: 'course/:courseName', component: ComputerComponent }
	
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    CoursesComponent,
    TeamComponent,
    ContactUsComponent,
    ComputerComponent
  ],
  imports: [
    BrowserModule,
	HttpModule,
	NgbModule.forRoot(),
	RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
