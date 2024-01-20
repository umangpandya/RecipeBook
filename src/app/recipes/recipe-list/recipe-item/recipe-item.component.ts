import { Component, Input,Output, OnInit,EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
 @Input('Inputrecipe') recipe : Recipe;
 @Output() recipeSelected = new EventEmitter<void>();
 //recipeSelector = new 
  constructor() { }

  ngOnInit() {
  }
  onSelectedRecipe(){
    debugger;
    this.recipeSelected.emit();
  }

}
