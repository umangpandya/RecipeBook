import { Component, ElementRef, OnInit,ViewChild,EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/Shared/ingredient.model';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('ingName')  IngInputRef : ElementRef;
@ViewChild('ingAmount') IngAmountRef : ElementRef;
@Output() newIngredient = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit(): void {
  }
  onEnterItem() {
    const IngredientName = this.IngInputRef.nativeElement.value;
    const IngredientAmount = this.IngAmountRef.nativeElement.value;
    const newIng = new Ingredient(IngredientName, IngredientAmount);
    this.newIngredient.emit(newIng);
  }

}
