import { Component, OnInit } from '@angular/core';
import { CommitGithubService } from 'src/app/service/commit-github.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(private commitGithubService:CommitGithubService) { }

  ngOnInit(): void {
    this.commitGithubService.getCommit().subscribe((commit)=>console.log(commit))
  }

}
