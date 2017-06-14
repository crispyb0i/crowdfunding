import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ProjectService } from '../project.service';
import { Project } from '../project.model';
import { DonatorService } from '../donator.service';
import { Donator } from '../donator.model';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
   providers: [ProjectService, DonatorService]
})

export class HomeComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;
  donators: FirebaseListObservable<any[]>;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private projectService: ProjectService,
    private donatorService: DonatorService,
    private router: Router
  ) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects()
    console.log(this.projectService)
  }

}
