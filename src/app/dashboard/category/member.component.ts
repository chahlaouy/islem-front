import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {

  public isHidden = true
  public nom: ''
  public slug: ''
  public description: ''

  public categories;
  
constructor( private http: HttpClient) { }

ngOnInit(): void {
  this.http.get('http://127.0.0.1:9090/api/category/all').subscribe(data => {
    console.log(data)
    this.categories = data
  })
  
}

toggle(){
  this.isHidden =  ! this.isHidden
}

registerCat(){
  console.log(this.description)
  this.http.post('http://127.0.0.1:9090/api/category/save', {
    "nom" : this.nom,
    "slug": this.slug,
    "description": this.description,

  }).subscribe(data => {
    this.http.get('http://127.0.0.1:9090/api/category/all').subscribe(data => {
    console.log(data)
    this.categories = data
  })
  })
}

deleteProduct(id){
  this.http.delete(`http://127.0.0.1:9090/api/category/delete/${id}`).subscribe(data => {
    this.http.get('http://127.0.0.1:9090/api/category/all').subscribe(data => {
    console.log(data)
    this.categories = data
  })
  })

}

}
