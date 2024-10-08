import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private keycloakService: KeycloakService, private router: Router) { }

    async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
        if (this.keycloakService.isLoggedIn()) {
            return true;
        }

        await this.keycloakService.login({
            redirectUri: window.location.origin + state.url,
        });
        return false;
    }
}