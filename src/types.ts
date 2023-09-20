export interface Ingredient {
    id: number
    name: string;
    approx_per_piece: number;
    energy: number;
    fats: number;
    carbs: number;
    proteins: number;
    fibres: number;
    salt: number;
    is_liquid: boolean
    density: number;
    amount: number;
}

export interface Unit {
    id: number;
    name: string;
    grams: number;
}


export interface IngredientItem {
    id: number;
    ingredient: Ingredient;
    unit: Unit;
    note: string;
    exclude: boolean;
}


export interface Tag {
    id: number;
    name: string;
}


export interface Recipe {
    id: number;
    title: string;
    subtitle: string;
    source_name?: string;
    source?: string;
    draft: boolean;
    favorite: boolean;
    portions: number;
    tags: Tag[];
    ingredients: IngredientItem[]
    body?: string;
}