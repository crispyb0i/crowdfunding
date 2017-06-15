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

  // @Input() selectedProject;

  projectId: string;
  projectToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private projectService: ProjectService, donatorService: DonatorService) { }

  ngOnInit() {
   this.route.params.forEach((urlParameters) => {
    this.projectId = urlParameters['id'];
  });
   this.projectService.getProjectById(this.projectId).subscribe(project => {
     this.projectToDisplay = project;
   });
 }

 formHide=false;

 toggle(){
   this.formHide=!this.formHide
 }

 update() {
  //  this.projectService.updateProject(this)
   this.toggle()
 }

 delete(projectToDelete){
    if(confirm("Are you sure you want to delete this item from the inventory?")){
      this.projectService.deleteProject(projectToDelete);
    }
  }
}
