import { useState } from 'react';

export interface Recipe {
    id_recipe: number;
    title: string;
    content: string;
    image_url: string;
}

const mockRecipes: Recipe[] = [
    {
        id_recipe: 1,
        title: "Pollo a la Parrilla",
        content: "Ingredients (Serves 1) 1/2 cup (40g) rolled oats 1 scoop (30g) vanilla or chocolate protein powder 1/2 cup (120ml) almond milk or any milk of choice 1/2 banana, sliced 1/4 cup (40g) Greek yogurt (optional for extra creaminess and protein) 1 tbsp peanut butter or almond butter 1 tsp chia seeds or flaxseeds Handful of fresh berries (e.g., blueberries, strawberries, or raspberries) A sprinkle of cinnamon (optional) Nutrition (Approximate) Calories: 400-450 kcal Protein: 30-35g Carbs: 40-45g Fats: 12-15g",
        image_url: "https://example.com/pollo-parrilla.jpg"
    },
    {
        id_recipe: 2,
        title: "Ensalada César",
        content: "Clásica ensalada con aderezo césar y crutones",
        image_url: "https://example.com/ensalada-cesar.jpg"
    },
    {
        id_recipe: 3,
        title: "Pasta Alfredo",
        content: "Pasta cremosa con salsa alfredo casera",
        image_url: "https://example.com/pasta-alfredo.jpg"
    },
    {
        id_recipe: 4,
        title: "Ñoquis de la abuela",
        content: "Ñoquis caseros con salsa de tomate",
        image_url: "https://example.com/noquis.jpg"
    }
];

export function useRecipes() {
    const [recipes] = useState<Recipe[]>(mockRecipes);

    const getRecipeById = (id: number) => {
        return recipes.find(recipe => recipe.id_recipe === id);
    };

    return {
        recipes,
        getRecipeById,
    };
}
