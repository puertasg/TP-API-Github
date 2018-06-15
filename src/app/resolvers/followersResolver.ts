import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FollowerApiService } from "../services/follower-api.service";
@Injectable()
export class FollowersResolver implements Resolve<any> {
    constructor(private followerApi: FollowerApiService) {
    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        let login = route.parent.params["login"];
        return this.followerApi.getFollowers(login);
    }
}