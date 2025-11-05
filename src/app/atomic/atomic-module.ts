import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from './atoms/button/button';
import { DesignShowcase } from './pages/design-showcase/design-showcase';
import { LoginPage } from './pages/login-page/login-page';
import { Label } from './atoms/label/label';
import { Icon } from './atoms/icon/icon';


@NgModule({
  declarations: [
    Button,
    DesignShowcase,
    LoginPage,
    Label,
    Icon,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Button
  ]
})
export class AtomicModule { }
