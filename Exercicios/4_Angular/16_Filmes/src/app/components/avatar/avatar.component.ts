import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  imports: [],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss'
})
export class AvatarComponent {
  @Input() imageClassName: string = "";
  @Input() nameClassName: string = "";
  @Input() subNameClassName: string = "";

  @Input() image: string = "";
}
