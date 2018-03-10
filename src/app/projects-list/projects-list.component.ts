import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase } from "angularfire2/database";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {
  projectsObservable: Observable<any[]>;

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.projectsObservable = this.getProjects('/projects');
  }

  getProjects(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }

}
