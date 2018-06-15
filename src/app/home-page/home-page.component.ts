import { Component, OnInit } from '@angular/core';
import { PATH_USER } from '../contantes/url';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private router: Router) { }

  user: string = "";

  ngOnInit() {
  }

  loadUser() {
    this.router.navigate([PATH_USER, this.user]);
  }
}
