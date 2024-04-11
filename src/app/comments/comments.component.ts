import { Component, Input, booleanAttribute } from '@angular/core';
import { CustomComponent } from '../custom/custom.component';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CustomComponent],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent {
  @Input({ required: true, transform: booleanAttribute }) showAuthor: boolean = false
}
