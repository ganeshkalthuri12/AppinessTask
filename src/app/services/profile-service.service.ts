import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {


  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any> {
    const url = environment.userApi;
    return this.http.get(url);
  }

  getAllRepos(name): Observable<any> {
    const url = `${environment.userApi}/${name}/repos`;
    console.log('ue', url, name)
    return this.http.get(url);
  }
}
