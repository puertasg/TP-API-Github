import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Repo } from '../classes/Repo';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
  repos: Array<Repo> = [];
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => data["repos"].forEach(repo => {
      let newRepo: Repo = new Repo(repo.name, repo.html_url);
      this.repos.push(newRepo);
    }));
  }

}
