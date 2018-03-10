import { Component, OnInit } from '@angular/core';

import {AngularFireDatabase} from "angularfire2/database";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {
  projectsObservable: Observable<any[]>;

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.projectsObservable = this.getProjects('/projects');
  }

  getProjects(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }

}

