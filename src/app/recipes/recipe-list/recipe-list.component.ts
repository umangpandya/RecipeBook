import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Vadapav', 'This is Mumbai Style Vadapav', 'https://media.istockphoto.com/id/1329213718/photo/vada-pav.jpg?s=612x612&w=0&k=20&c=Yy3pm53KrPAnZXL9weCJDzXjxa2My34oVFx7RBCPmZ8='),
    new Recipe('Pizza', 'Italian Pizza', 'https://cdn.pixabay.com/photo/2023/03/20/04/09/pizza-7863716_1280.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(recipe:Recipe){
    debugger;
    this.recipeWasSelected.emit(recipe);
  }

}
