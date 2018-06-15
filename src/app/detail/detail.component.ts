import { Component, OnInit } from '@angular/core';
import { User } from '../classes/Users';
import { ActivatedRoute } from '@angular/router';
import { UserApiService } from '../services/user-api.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private userApi: UserApiService) { }

  user: User;

  ngOnInit() {
    this.user = new User();
    this.route.data.subscribe(data => {
      this.user.avatar = data["user"].avatar_url;
      this.user.bio = data["user"].bio;
      this.user.company = data["user"].company;
      this.user.location = data["user"].location;
      this.user.login = data["user"].login;
      this.user.type = data["user"].type;
      this.user.url = data["user"].url;
    });
  }
}
