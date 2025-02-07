import { Component, Input } from '@angular/core';
import { Cast } from '../../models/cast';
import { MoviesService } from '../../services/movies.service';
import { Crew } from '../../models/crew';

@Component({
  selector: 'app-avatar',
  imports: [],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss'
})
export class AvatarComponent {

  constructor(private getMoviesService: MoviesService) { }

  @Input() imageClassName: string = "";
  @Input() nameClassName: string = "";
  @Input() subNameClassName: string = "";

  @Input() actor?: Cast;
  @Input() crew?: Crew;
  @Input() image?: string;


  ngOnInit() {
    if (this.actor) {
      if (!this.actor?.profile_path) {
        if (this.actor?.gender == 1) {
          this.image = "../../images/female-profile.png";
        }
        else {
          this.image = "../../images/male-profile.png";
        }
      }
      else {
        this.image = this.getMoviesService.getImagesUrl() + this.actor?.profile_path;
      }
    }

    if (this.crew) {
      if (!this.crew?.profile_path) {
        if (this.crew?.gender == 1) {
          this.image = "../../images/female-profile.png";
        }
        else {
          this.image = "../../images/male-profile.png";
        }
      }
      else {
        this.image = this.getMoviesService.getImagesUrl() + this.crew?.profile_path;
      }
    }

  }


}
