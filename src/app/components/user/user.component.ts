import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileServiceService } from 'src/app/services/profile-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userId: string;
  ListOfAllRepos: any[];
  constructor(private router:ActivatedRoute,
    private profileService: ProfileServiceService) { }

  ngOnInit() {
    this.router.queryParams.subscribe(params => {
      this.userId = params['user'];
  });
    this.getRepoData();
  }

  getRepoData() {
    console.log(this.userId, 'dddd')
    this.profileService.getAllRepos(this.userId).subscribe((repoData) => {
      if (repoData) {
        this.ListOfAllRepos = repoData;
      }
    })
  }


}
