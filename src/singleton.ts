import type { Recipe } from "./types";
import { BASE_URL } from "./utils/links";

const recipesUrl = `${BASE_URL}/api/recipes`

let recipes: Recipe[] = []

export const getRecipes = async () => {
    if (recipes && recipes.length > 0) {
        return recipes
    }
    console.info("FETCHING!!!")
    const res = await fetch(recipesUrl)
    const data = await res.json();
    recipes = data as Recipe[];
    return recipes;
}

export const getRecipe = async (id: number) => {
    if (recipes && recipes.length > 0) {
        await getRecipes()
    }
    const prod = recipes.find(p => p.id === id)
    return prod
}
