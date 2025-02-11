import { Component, Input } from '@angular/core';
import { WhiteCardComponent } from '../white-card/white-card.component';
import { AvatarComponent } from '../avatar/avatar.component';
import { Review } from '../../models/review';
import { ReviewsService } from '../../services/reviews.service';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { BadgeComponent } from "../badge/badge.component";

@Component({
  selector: 'app-review',
  imports: [WhiteCardComponent, AvatarComponent, BadgeComponent],
  templateUrl: './review.component.html',
  styleUrl: './review.component.scss'
})
export class ReviewComponent {
  @Input() review?: Review;
  user?: User;
  trigger: boolean = false;

  constructor(private getReviewsService: ReviewsService, private getUserService: UserService) { };

  ngOnInit() {
    if (this.review) {
      if (!this.trigger) {
        this.review.rating /= 2;
        this.trigger = true;
      }

      this.getUserService.getUser(this.review.userID).subscribe({
        next: (res) => {
          // ??????????
          // this.user = res;
          this.user = res[0];
        },
        error: () => {

        }
      });
    }

  }
}
