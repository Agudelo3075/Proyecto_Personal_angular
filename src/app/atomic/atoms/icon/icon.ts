import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  standalone: false,
  templateUrl: './icon.html',
  styleUrl: './icon.scss',
})
export class Icon {

  @Input() name: 'lock' | 'user' | 'email' = 'lock';

  @Input() size: number = 24;

  @Input() color: string = '';

  get sizeClass(): string {
    if (this.size <= 16) return 'small';
    if (this.size >= 32) return 'large';
    return 'medium';
  }
}
