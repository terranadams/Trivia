import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { User } from '../../interfaces/user';
import { Observable} from 'rxjs';
import { HostService } from 'src/app/services/host.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  usersCollection: AngularFirestoreCollection<User>;

  users: Observable<any>;
  
  host: User = {
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
      worstCategory: ''
    }
  };

  constructor(
    public afs: AngularFirestore,
     private afAuth: AngularFireAuth,
     public hostService: HostService,
     private router: Router
     ) {
    this.users = this.afs.collection('users').valueChanges();
    this.usersCollection = this.afs.collection('users');
  }

  getUsers() {
    return this.users;
  }

  addUser() {
    this.usersCollection.add(this.host)
    .then(docRef => {
      this.usersCollection.doc(docRef.id).update({id: docRef.id});
      this.host.id = docRef.id
      this.hostService.hostPlayer.id = docRef.id
      this.router.navigate(['user-details']);
    })
  }


  GoogleAuthLogin() {
    return this.afAuth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((result) => {
        this.host.displayName = result.user.displayName;
        this.host.email = result.user.email;
        this.host.photoURL = result.user.photoURL;
        // console.log(`${result.user.displayName} has successfully logged in!`);
        // console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
