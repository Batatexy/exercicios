import { Component, Input } from '@angular/core';
import { WhiteCardComponent } from '../white-card/white-card.component';
import { AvatarComponent } from '../avatar/avatar.component';
import { Review } from '../../models/review';
import { ReviewsService } from '../../services/reviews.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-review',
  imports: [WhiteCardComponent, AvatarComponent],
  templateUrl: './review.component.html',
  styleUrl: './review.component.scss'
})
export class ReviewComponent {
  @Input() review!: Review;
  user!: User;

  constructor(private getReviewsService: ReviewsService) { };

  ngOnInit() {
    this.getReviewsService.getUser(this.review.userID).subscribe({
      next: (res) => {
        this.user = res;
      },
      error: () => {

      }
    });
  }
}
