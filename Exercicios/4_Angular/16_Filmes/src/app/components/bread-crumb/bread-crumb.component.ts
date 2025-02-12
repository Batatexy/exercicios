import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { CommonModule } from '@angular/common';
import { BreadCrumbService } from '../../services/bread-crumb.service';

@Component({
  selector: 'app-bread-crumb',
  imports: [RouterLink, CommonModule],
  templateUrl: './bread-crumb.component.html',
  styleUrl: './bread-crumb.component.scss'
})
export class BreadCrumbComponent {

  pathArray: Array<string> = [];
  constructor(private router: ActivatedRoute, private getMoviesService: MoviesService, private getBreadCrumbService: BreadCrumbService) { }

  public getActualRoute(): string {
    return this.getBreadCrumbService.getActualRoute();
  }

  ngOnInit(): void {
    this.router.data.subscribe({
      next: (route) => {
        this.getBreadCrumbService.setActualRoute(route["breadCrumb"]);
        console.log(this.getBreadCrumbService.getActualRoute());

      }
    });
  }

}
