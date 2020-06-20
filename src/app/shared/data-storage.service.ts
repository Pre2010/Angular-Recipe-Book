import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { map, tap, take, exhaustMap } from "rxjs/operators";
import { AuthService } from "../auth/auth/auth.service";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    // firebase url and need to add above recipes and the .json
    this.http
      .put(environment.firebaseDbUrl + "/recipes.json", recipes)
      .subscribe((response) => {
        console.log(response);
      });
  }

  fetchRecipes() {
    // take(1) we only want to take 1 value and then unsubscribe
    // exhaustMap = waits for the first observable to complete,user, then in exhaustMaps we get data from the previous observable, user,
    // then we return a new observable that will replace the old one
    // return this.authService.user.pipe(
    //   take(1),
    //   exhaustMap((user) => {
    return this.http
      .get<Recipe[]>(environment.firebaseDbUrl + "/recipes.json")
      .pipe(
        map((recipes) => {
          return recipes.map((recipe) => {
            // ... is a spread operator. if ingredients is null, then set it to an empty array
            // if ingredients are not null, populate that field with ingredients
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : [],
            };
          });
        }),
        tap((recipes) => {
          this.recipeService.setRecipes(recipes);
        })
      );
  }
}
