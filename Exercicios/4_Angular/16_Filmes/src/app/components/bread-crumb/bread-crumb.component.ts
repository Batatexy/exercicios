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

  pathArrayFromURL: Array<string> = ["/"]
  pathArray: Array<string> = ["/"]

  constructor(private route: ActivatedRoute, public GetMoviesService: MoviesService) { }

  ngOnInit()
  {
    this.pathArrayFromURL = this.route.snapshot.url.join().split(",");

    for(let i:number = 0; i < this.pathArrayFromURL.length; i++)
    {
      let pathString: string = "";

      for(let j:number = 0; j <= i; j++)
      {
        //Verificar se existe algo neste proximo elemento, senão em home fica : "Home - Home"
        if (this.pathArrayFromURL[j])
        {
          pathString += "/" + this.pathArrayFromURL[j]
        }
        
      }

      //Definir rotas
      if (pathString == "/movie") pathString = "/movies"




      if (pathString != "") this.pathArray.push(pathString)
    }

      // console.log("pathArray:" , this.pathArray);
      // console.log("pathArraySplit:" , this.pathArrayFromURL);
    }

  parseInt(string: string): number{
    return parseInt(string);
  }
}
