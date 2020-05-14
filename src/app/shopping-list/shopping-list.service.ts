import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListComponent } from './shopping-list.component';
import { Subject } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
export class ShoppingListService {
  // ingredientsChanged = new EventEmitter<Ingredient[]>();
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    // new Ingredient('Apples', 5),
    // new Ingredient('Tomatoes', 10),
  ];

  constructor() { }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  // addIngredient(ingredient: Ingredient){
  //   this.ingredients.push(ingredient);
  //   this.ingredientsChanged.emit(this.ingredients.slice());
  // }

  // Below is to help get rid of dedups in shoppinglist
    addIngredient(ingredient: Ingredient, publishChanges = true) {
      const index = this.ingredients.findIndex(ing => ing.name === ingredient.name);
      if (index === -1) {
        this.ingredients.push(ingredient);
      } else {
        this.ingredients[index].amount += ingredient.amount;
      }
      if (publishChanges) {
        this.ingredientsChanged.next(this.ingredients.slice());
      }
    }

    updateIngredient(index: number, newIngredient: Ingredient) {
      this.ingredients[index] = newIngredient;
      this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
    // for (let ingredient of ingredients){
    //   this.addIngredient(ingredient);
    // }
    // es6 spread operator ...
    // spread our ingredients into a list of single ingredients
    // which are pushed into a single ingredients array
    // this.ingredients.push(...ingredients);
    // this.ingredientsChanged.emit(this.ingredients.slice());

    // Below is to help get rid of dedups in shoppinglist
    ingredients.forEach(ing => this.addIngredient(ing, false));
    this.ingredientsChanged.next(this.ingredients.slice());
  }

    deleteIngredient(index: number) {
      // splicing it removes it from the array
      this.ingredients.splice(index, 1);
      this.ingredientsChanged.next(this.ingredients.slice());
    }

}
