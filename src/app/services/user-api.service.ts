import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../classes/Users';
import { BASE_URL } from '../contantes/url';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private http: HttpClient) { }

  getUser(login: string): Promise<User> {
    let userPromise = this.http.get<User>(`${BASE_URL}${login}`).toPromise();
    return userPromise;
  }
}
