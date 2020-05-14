import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class RecipeService {
  // recipeSelected = new EventEmitter<Recipe>();
  // recipeSelected = new Subject<Recipe>();
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    // new Recipe(
    //   "A Test Recipe",
    //   "Herb Risotto Recipe",
    //   // tslint:disable-next-line: max-line-length
    //   "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/instant-pot-risotto-horizontal-1540928371.png?crop=1.00xw:0.941xh;0,0&resize=768:*",
    //   [new Ingredient("Rice", 1), new Ingredient("Herbs", 3)]
    // ),
    // new Recipe(
    //   "Another Test Recipe",
    //   "Butter Chicken Recipe",
    //   "https://vikalinka.com/wp-content/uploads/2018/04/Butter-Chicken-Curry-1-Edit.jpg",
    //   [
    //     new Ingredient("Chicken", 2),
    //     new Ingredient("Herbs", 3),
    //     new Ingredient("Tomato Sauce", 2),
    //     new Ingredient("Coconut Cream", 1)
    //   ]
    // )
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
