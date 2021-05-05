import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { CreateGameComponent } from './components/create-game/create-game.component';
import { LoginComponent } from './components/login/login.component';
import { TriviaPageComponent } from './components/trivia-page/trivia-page.component';
import { LoginCheckGuard } from './login-check.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login-page', component: LoginComponent },
  { path: 'create-game', component: CreateGameComponent, canActivate: [LoginCheckGuard], runGuardsAndResolvers: 'always' },
  {path: 'trivia-page', component: TriviaPageComponent, canActivate: [LoginCheckGuard], runGuardsAndResolvers: 'always'},
  { path: 'user-details', component: UserDetailsComponent, canActivate: [LoginCheckGuard], runGuardsAndResolvers: 'always' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
