import { Component, OnInit } from '@angular/core';
import { ProfileServiceService } from 'src/app/services/profile-service.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {
  allGitUsers: any[];
  originalData: any[];
  constructor(private profileService: ProfileServiceService) { }

  ngOnInit() {
    this.getAllUsersData();
  }

  getAllUsersData() {
    this.profileService.getAllUsers().subscribe((res) => {
      if (res) {
        this.allGitUsers = res;
        this.originalData = res;
        this.allGitUsers.sort((a, b) => {
          if (a.login.toLowerCase() < b.login.toLowerCase()) return -1
          return a.login.toLowerCase() > b.login.toLowerCase() ? 1 : 0
        });
      }
    })
  }

  findUsers(term) {
    if (term !== '') {
      this.allGitUsers = this.allGitUsers.filter((response) => {
        if (response.login.toLowerCase().startsWith(term)) {
          return response;
        }
      })
    } else {
      this.allGitUsers = this.originalData;
    }
  }

}
