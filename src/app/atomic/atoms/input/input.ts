import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: false,
  templateUrl: './input.html',
  styleUrl: './input.scss',
})
export class InputComponent {
  
  @Input() id: string = '';

  @Input() value: string = '';

  @Input() placeholder: string= '';

  @Input() type: 'text' | 'email' |'password' | 'number' = 'text';

  @Input() disabled: boolean = false;

  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  onInput(event: Event): void {
    const inputElement = (event.target as HTMLInputElement).value;
    this.valueChange.emit(inputElement);
  }
}
