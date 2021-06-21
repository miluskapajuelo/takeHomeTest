import { Component, OnInit } from '@angular/core';
import { CommitGithubService } from 'src/app/service/commit-github.service';

@Component({
  selector: 'app-commits',
  templateUrl: './commits.component.html',
  styleUrls: ['./commits.component.sass']
})
export class CommitsComponent implements OnInit {

  commitList:Array<any>

  constructor(private commitGithubService:CommitGithubService) {
    this.commitList=[]
   }

  ngOnInit(): void {
    this.commitGithubService.getCommit().subscribe((element)=>{
      this.commitList = element
      this.commitList.reverse()
    })


  }


}
