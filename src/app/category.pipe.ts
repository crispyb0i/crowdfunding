import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './project.model'

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(input: Project[],desiredCategory) {
    var output: Project[] = [];
    if(desiredCategory === "Business") {
      for (var i = 0; i < input.length; i++){
        if(input[i].category==="Business"){
          output.push(input[i])
        }
      }
      return output;
    }
    else if(desiredCategory === "Wish"){
      for (var i=0; i<input.length; i++){
        if(input[i].category==="Wish"){
          output.push(input[i])
        }
      }return output;
    }else if(desiredCategory === "Creative"){
      for (var i=0; i<input.length; i++) {
        if(input[i].category==="Creative"){
        output.push(input[i])
      }
      }return output;
    }else{
      return input
    }
  }
}
