import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserApiService } from "../services/user-api.service";
@Injectable()
export class UserResolver implements Resolve<any> {
    constructor(private userApi: UserApiService) {
    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        let login = route.params["login"];
        return this.userApi.getUser(login);
    }
}