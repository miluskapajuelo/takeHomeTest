import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommitGithubService {

  private domain: string;
  private user: string;
  private repo: string;
  private type: string;


  constructor(private httpClient: HttpClient) {
    this.domain ='https://api.github.com/repos'
    this.user = '/miluskapajuelo'
    this.repo ='/takeHomeTest'
    this.type = '/commits'
   }
  getCommit() {
    return this.httpClient.get<any>(`${this.domain}${this.user}${this.repo}${this.type}`);
  }
}
