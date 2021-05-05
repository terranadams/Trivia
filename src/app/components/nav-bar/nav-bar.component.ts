import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HostService } from 'src/app/services/host.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  buttonRendered: boolean;

  constructor(
    private router: Router,
    public hostService: HostService,
    ) {
    }

  ngOnInit(): void {
    this.buttonRendered = true;
  }

  logOut() {
    this.hostService.hostPlayer = {
      displayName: '',
      email: '',
      photoURL: '',
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

    this.hostService.nonHostPlayers = [];

    this.hostService.allPlayers = [];

    this.hostService.userLoggedIn = false

    this.router.navigate(['login-page']) 
  

  }

}
