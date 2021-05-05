 import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user'
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class HostService {
  
  
  usersCollection: AngularFirestoreCollection<User>;

  constructor(
    public router: Router,
    public afs: AngularFirestore
  ) {
    this.usersCollection = this.afs.collection('users')
  }

  userLoggedIn = false;

  hostPlayer: User = {
    displayName: '',
    email: '',
    photoURL: '',
    id: '',
    stats: {
      gamesPlayed: 0,
      gamesWon: 0,
      gamesLost: 0,
      questionsAnswered: 0,
      questionsRight: [],
      questionsWrong: [],
      bestCategory: '',
      worstCategory: '',
    },
  };

  nonHostPlayers = [];

  allPlayers = [];
  setHostPlayer(x: User) {
    this.hostPlayer = x;
    this.userLoggedIn = true;
    this.nonHostPlayers = this.allPlayers.filter((x) => {
      return x.email != this.hostPlayer.email;
    });
  }

}
