import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Repo } from '../classes/Repo';
import { BASE_URL, REPOS_URL } from '../contantes/url';

@Injectable({
  providedIn: 'root'
})
export class RepoApiService {

  constructor(private http: HttpClient) { }

  getRepos(login: string): Promise<Array<Repo>> {
    return this.http.get<Array<Repo>>(`${BASE_URL}${login}${REPOS_URL}`).toPromise();
  }
}
