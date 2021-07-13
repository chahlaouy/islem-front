import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  
  public username: ''
  public email: ''
  public password: ''
  public lastName: 'lastName'
  public firstName: 'firstName'
  public phone: '123456'

constructor( private http: HttpClient, private route:Router) { }

ngOnInit(): void {
}

registerUser(){
  console.log(this.firstName)
  this.http.post('http://127.0.0.1:9090/api/auth/signup', {
    "username" : this.firstName,
    "email": this.email,
    "password": this.password,
    "lastName": this.lastName,
    "firstName": this.firstName,
    "phone": this.phone,
    "role": ["user"]
  }).subscribe(data => {
    this.route.navigateByUrl("/connexion")
  })
}

}
