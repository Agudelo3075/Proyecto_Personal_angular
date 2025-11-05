import { Component } from '@angular/core';

@Component({
  selector: 'app-design-showcase',
  standalone: false,
  templateUrl: './design-showcase.html',
  styleUrl: './design-showcase.scss',
})
export class DesignShowcase {

  handleButtonClick(name: string) {
    alert(`Click en botón: ${name}`);
  }
  
}
