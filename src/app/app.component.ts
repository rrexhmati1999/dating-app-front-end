import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'The Dating App';
  users: any;

  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.http.get('https://localhost:7104/api/Users').subscribe(response => {
      this.users = response;
    }, error => {
      console.log(error);
    })
  }
}
