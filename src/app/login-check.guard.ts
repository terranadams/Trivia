import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {HostService} from '../app/services/host.service'

@Injectable({
  providedIn: 'root'
})
export class LoginCheckGuard implements CanActivate {

  constructor(private hostService: HostService, private router: Router) {};

  checkForHostData = this.hostService.hostPlayer.displayName;

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if(!this.hostService.userLoggedIn) {
        this.router.navigateByUrl('')
        return false;
      } else {
        return true;
      }
  }
  
}
