import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RepoApiService } from "../services/repo-api.service";
@Injectable()
export class ReposResolver implements Resolve<any> {
    constructor(private repoApi: RepoApiService) {
    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        let login = route.parent.params["login"];
        return this.repoApi.getRepos(login);
    }
}