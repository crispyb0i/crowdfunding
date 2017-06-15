import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ProjectService {
  projects: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) { this.projects = database.list('projects');
}

  getProjects(){
  return this.projects;
  }

  getProjectById(projectId: string){
    return this.database.object('projects/' + projectId)
  }

  addProject(newProject: Project) {
    this.projects.push(newProject);
  }

  updateProject(projectToUpdate){
    var projectEntryInFirebase = this.getProjectById(projectToUpdate.$key);
    projectToUpdate.update({name:projectToUpdate.name,managers:projectToUpdate.managers,detail:projectToUpdate.detail,incentive:projectToUpdate.incentive,image:projectToUpdate.image,category:projectToUpdate.category,goal:projectToUpdate.goal});
  }

  deleteProject(localProjectToDelete){
    var projectEntryInFirebase = this.getProjectById(localProjectToDelete.$key);
    projectEntryInFirebase.remove();
  }
}
