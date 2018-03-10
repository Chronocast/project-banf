import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DataService } from "./data.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { HomeComponent } from './home/home.component';
import { BucketlistComponent } from './bucketlist/bucketlist.component'
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    ProjectsListComponent,
    HomeComponent,
    BucketlistComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
