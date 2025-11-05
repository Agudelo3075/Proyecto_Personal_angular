import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from './atoms/button/button';
import { DesignShowcase } from './pages/design-showcase/design-showcase';
import { LoginPage } from './pages/login-page/login-page';
import { Label } from './atoms/label/label';
import { Icon } from './atoms/icon/icon';
import { InputComponent } from './atoms/input/input';
import { FormField } from './molecules/form-field/form-field';


@NgModule({
  declarations: [
    Button,
    DesignShowcase,
    LoginPage,
    Label,
    Icon,
    InputComponent,
    FormField
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Button,
    DesignShowcase,
    LoginPage,
    Label,
    Icon,
    InputComponent,
    FormField
  ]
})
export class AtomicModule { }
