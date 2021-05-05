import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Firebase modules
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TriviaPageComponent } from './components/trivia-page/trivia-page.component';
import { HttpClientModule } from '@angular/common/http';

//Mats
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatTooltipModule} from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';

import {MatTableModule} from '@angular/material/table';
import { CreateGameComponent } from './components/create-game/create-game.component';
import { environment } from 'src/environments/environment';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import {LoginComponent} from './components/login/login.component'

@NgModule({
  declarations: [
    AppComponent,
    TriviaPageComponent,
    UserDetailsComponent,
    CreateGameComponent,
    NavBarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule, 
    MatFormFieldModule, 
    MatIconModule, 
    MatRadioModule, 
    MatProgressSpinnerModule,
    MatButtonModule,
    HttpClientModule, 
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatIconModule, 
    MatRadioModule, 
    MatProgressSpinnerModule, 
    MatGridListModule, 
    MatTableModule,
    BrowserAnimationsModule, 
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatIconModule, 
    MatRadioModule, 
    MatProgressSpinnerModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    FormsModule, 
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    MatTooltipModule, 
    MatSidenavModule

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }