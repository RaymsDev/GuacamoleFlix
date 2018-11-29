import { Component, OnInit } from '@angular/core';
import { Category } from './../../../../../both/models/category.model'

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
  Libelle: string
  Pegi: number
  AllCategory: Array<Category>
  constructor() 
  { 
    this.AllCategory = []
  }

  ngOnInit() {
  }

  AddCategory()
  {
    console.log(this.Libelle)
    console.log(this.Pegi)
    let cat = new Category();
    cat.name = this.Libelle
    cat.pegi = this.Pegi
    this.AllCategory.push(cat)
  }

}
