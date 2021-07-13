import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {

  public isHidden = true

  public libelle: ''
  public slug: ''
  public prix: ''
  public quantite: ''
  public description: ''
  public category: ''
  

  public categories;
  public products;

constructor( private http: HttpClient) { }

ngOnInit(): void {
  this.http.get('http://127.0.0.1:9090/api/category/all').subscribe(data => {
    console.log(data)
    this.categories = data
  })

  this.http.get('http://127.0.0.1:9090/api/products/all').subscribe(data => {
    console.log(data)
    this.products = data
  })
}
toggle(){
  this.isHidden =  ! this.isHidden
}
addProduct(){

  this.http.post('http://127.0.0.1:9090/api/products/save', {
  "libelle" : this.libelle,
  "slug": this.slug,
  "prix": this.prix,
  "quantite": this.quantite,
  "description": this.description,
  "category": this.category,
  
    }).subscribe(data => {
      this.http.get('http://127.0.0.1:9090/api/products/all').subscribe(data => {
        console.log(data)
        this.products = data
      })
    })
}

deleteProduct(id){
  this.http.delete(`http://127.0.0.1:9090/api/products/delete/${id}`).subscribe(data => {
    this.http.get('http://127.0.0.1:9090/api/products/all').subscribe(data => {
      console.log(data)
      this.products = data
    })
})

}

}
