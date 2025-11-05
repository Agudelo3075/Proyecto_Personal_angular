import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: false,
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {

  //Texto visible del botón
  @Input() label: string = 'Button';

  //Tipo de acción según la variante que se le da de acuerdo al scss
  @Input() type: 'button' | 'submit' | 'reset' = 'button';

  //Apariencia visual del botón(Puedo escoger cual poner de acuerdo a las caracteristicas)
  @Input() variant: 'primary' | 'secondary' | 'danger' = 'primary'

  //Tamaño del botón(Tambie puedo ponerle su tamaño desde el scss, y tener varias opciones de ejecución)
  @Input() size: 'small' | 'medium' | 'large' = 'medium';

  //Bloquear el botón temporalmente
  @Input() disabled: boolean = false; 

  //Si está en true, jhace que el botón ocupe toda la pantalla
  @Input() fullWith: boolean = false;

  //Evento para hacer click
  @Output() onClick = new EventEmitter<void>();

  //Metodo por si el botón no está desabilitado, que ejecute el click
  handleClick(): void {
    if (!this.disabled) {
      this.onClick.emit();
    }
  }
}
