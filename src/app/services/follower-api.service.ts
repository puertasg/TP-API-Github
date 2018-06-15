import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../classes/Users';
import { BASE_URL, FOLLOWERS_URL } from '../contantes/url';

@Injectable({
  providedIn: 'root'
})
export class FollowerApiService {

  constructor(private http: HttpClient) { }

  getFollowers(login: string): Promise<Array<User>> {
    return this.http.get<Array<User>>(`${BASE_URL}${login}${FOLLOWERS_URL}`).toPromise();
  }
}
