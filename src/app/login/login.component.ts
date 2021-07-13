import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public username: ''
  public password: ''

constructor( private http: HttpClient, private route:Router) { }

ngOnInit(): void {
     if (localStorage.getItem('user')) {

      // req = req.clone({
      //   setHeaders: {
      //     Authorization: `Bearer ${localStorage.getItem('token')}`
      //   }
      // });

      this.route.navigateByUrl("/dashboard")
  }
}

login(){

  this.http.post('http://127.0.0.1:9090/api/auth/signin', {
    "username" : this.username,
    
    "password": this.password,

  }).subscribe(data => {
    localStorage.setItem('user', JSON.stringify(data))
    console.log(data)
    this.route.navigateByUrl("/dashboard")
  })
}

}
