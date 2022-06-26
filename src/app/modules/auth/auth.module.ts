import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule} from 'angularx-social-login';

import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';
import {RegisterSecurityComponent} from './components/register-security/register-security.component';
import {RegisterPersonalComponent} from './components/register-personal/register-personal.component';
import {RegisterConfirmationComponent} from './components/register-confirmation/register-confirmation.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register/:step', component: RegisterComponent},
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    RegisterSecurityComponent,
    RegisterPersonalComponent,
    RegisterConfirmationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    SocialLoginModule,
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('536567661461-nupo88jhipou0cdn51omc207o019ipi6.apps.googleusercontent.com'),
          },
        ],
      } as SocialAuthServiceConfig,
    },
  ]
})
export class AuthModule { }
