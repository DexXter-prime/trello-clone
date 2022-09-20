import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SignUpComponent } from './home-page/sign-up/sign-up.component';
import { LoginComponent } from './home-page/login/login.component';

const routes: Routes = [
  { path: '', component: HomePageComponent, children: [
    { path: '', component: SignUpComponent },
    { path: 'login', component: LoginComponent },
  ]}
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class EnterRoutingModule { }
