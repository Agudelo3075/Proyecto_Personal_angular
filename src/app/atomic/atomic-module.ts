import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from './atoms/button/button';
import { DesignShowcase } from './pages/design-showcase/design-showcase';
import { LoginPage } from './pages/login-page/login-page';


@NgModule({
  declarations: [
    Button,
    DesignShowcase,
    LoginPage,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Button
  ]
})
export class AtomicModule { }
