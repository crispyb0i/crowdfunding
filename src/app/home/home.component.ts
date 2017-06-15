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

  }
    formHide=false
    filterByCategory: string = "All Projects";

  goToProjectPage(clickedProject: Project) {
    // this.router.navigate(['projects', clickedProject.$key])
  }

  submitForm(name: string, managers: string, detail: string, incentive: string, image: string, category: string, goal: number){
    var newProject: Project = new Project(name, managers, detail, incentive, image, category, goal);
    this.projectService.addProject(newProject);
    this.toggle();
  }

  toggle(){
    this.formHide=!this.formHide
  }

  onChange(optionFromMenu) {
  this.filterByCategory = optionFromMenu;
  }
}
