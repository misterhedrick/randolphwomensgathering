import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import { WhosignedupComponent } from './whosignedup/whosignedup.component';
import { RegisterComponent } from './register/register.component';
import { WhoAttendedComponent } from './who-attended/who-attended.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'new', component: NewComponent },
  { path: 'whosignedup', component: WhosignedupComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'whoattended', component: WhoAttendedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
