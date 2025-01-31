import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bread-crumb',
  imports: [RouterLink, CommonModule],
  templateUrl: './bread-crumb.component.html',
  styleUrl: './bread-crumb.component.scss'
})
export class BreadCrumbComponent {

  pathArraySplit: Array<string> = []
  pathArray: Array<string> = ["/"]

  constructor(private route: ActivatedRoute, public GetMoviesService: MoviesService) { }

  ngOnInit()
  {
    console.clear()

    this.pathArraySplit = this.route.snapshot.url.join().split(",")
    console.log("PathArraySplit" , this.pathArraySplit)

    for(let i:number = 0; i < this.pathArraySplit.length; i++)
    {
      let pathString: string = "";

      for(let j:number = 0; j <= i; j++)
      {
        //Verificar se existe algo neste proximo elemento, senão em home fica : "Home - Home"
        if (this.pathArraySplit[j])
        {
          pathString += "/" + this.pathArraySplit[j]
        }
        
      }

      if (pathString == "/movie") pathString = "/movies"

      this.pathArray.push(pathString)
    }

      console.log("Final:" , this.pathArray);
    }

  parseInt(string: string): number{
    return parseInt(string);
  }
}
