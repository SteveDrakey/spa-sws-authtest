import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor( private httpClient: HttpClient) {}
  async ngOnInit() {

    var apiUser = await this.httpClient.get('/api/HttpExample').toPromise();
    console.log('user from our API call',apiUser);

    var authMe = await this.httpClient.get('/.auth/me').toPromise();
    console.log('user from ./auth/me',authMe);
    
  }
  title = 'AuthTest';
}


