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

  private pathArray: Array<string> = [];
  constructor(private route: ActivatedRoute, private getMoviesService: MoviesService) { }

  ngOnInit()
  {
    let urlArray: Array<string> = this.route.snapshot.url.join().split(",");

    for(let i:number = 0; i < urlArray.length; i++)
    {
      let pathString: string = "";

      for(let j:number = 0; j <= i; j++)
      {
        //Verificar se existe algo neste proximo elemento, senão em home fica : "Home - Home"
        if (urlArray[j])
        {
          pathString += "/" + urlArray[j];
        }

        if (pathString != "") this.pathArray[i] = pathString;
      }

      //Alterar rotas se necessário:
      if (this.pathArray[i] == "/movie") this.pathArray[i] = "/movies"
      
    }
    
    //Caso não precise existir o Home, remover:
    let finalPath = ["/"]
    finalPath = finalPath.concat(this.pathArray)
    this.pathArray = finalPath;

    console.log(this.pathArray);
  }

  public getMovieName(id: string): string{
    return this.getMoviesService.getMovieByID(parseInt(id))!.name;
  }

  public getPathArray(): Array<string>{
    return this.pathArray;
  }
}
