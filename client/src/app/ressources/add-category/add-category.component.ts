import { Component, OnInit } from '@angular/core';
import { Category } from './../../../../../both/models/category.model'
import { CategoryService } from '../../services/category.service'

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
  Libelle: string
  Pegi: number
  AllCategory: Array<Category>
  constructor(private gestionCategory:CategoryService) 
  { 
    this.AllCategory = []
  }

  ngOnInit() {
    this.gestionCategory.getCategories().subscribe((allCategory: Array<Category>) => {
      this.AllCategory = allCategory
    })
  }

  AddCategory()
  {
    let cat = new Category();
    cat.name = this.Libelle
    cat.pegi = this.Pegi
    this.gestionCategory.createNewCategory(cat).subscribe(categoryadd => {
      console.log(categoryadd)
      this.gestionCategory.getCategories().subscribe((allCategory: Array<Category>) => {
        this.AllCategory = allCategory
      })
    })
  }

  deleteCat(id)
  {
    this.gestionCategory.deleteCategory(id).subscribe(() => {
      this.gestionCategory.getCategories().subscribe((allCategory: Array<Category>) => {
        this.AllCategory = allCategory
      })
    })
  }

}
