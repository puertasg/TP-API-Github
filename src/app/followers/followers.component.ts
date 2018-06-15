import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../classes/Users';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
  followers: Array<User> = [];
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => data["followers"].forEach(user => {
      let follower = new User(user.login, user.type, user.company, user.bio, user.location, user.avatar);
      this.followers.push(follower);
    }));
  }
}
