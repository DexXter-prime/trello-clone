import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnterRoutingModule } from './enter-routing.module';
import { LoginComponent } from './home-page/login/login.component';
import { SignUpComponent } from './home-page/sign-up/sign-up.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    EnterRoutingModule,
    ReactiveFormsModule
  ]
})
export class EnterModule { }
