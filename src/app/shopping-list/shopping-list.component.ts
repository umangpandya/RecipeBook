import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../Shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples',10),
    new Ingredient('Tomatoes',20),
  ];

  constructor() { }

  ngOnInit(): void {
  }
  onIngredientAdded(ingredient : Ingredient)
  {
    this.ingredients.push(ingredient);
  }

}
