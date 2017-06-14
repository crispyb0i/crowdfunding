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
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
  providers: [ProjectService, DonatorService]
})
export class ProjectDetailComponent implements OnInit {

  projectId: string;
  projectToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private projectService: ProjectService, donatorService: DonatorService) { }

  ngOnInit() {
   this.route.params.forEach((urlParameters) => {
    this.projectId = urlParameters['id'];
  });
  this.projectToDisplay = this.projectService.getProjectById(this.projectId);
  console.log(this.projectToDisplay,this.projectId)
 }

}
