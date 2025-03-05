import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Link, useLocalSearchParams } from 'expo-router';
import { commonStyles } from '@/style/commonStyles';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { textStyles } from '@/style/textStyles';
import { buttonStyles } from '@/style/buttonStyles';
import { useRecipes } from '@/hooks/useRecipes';
import Markdown from 'react-native-markdown-display';
import { useEffect, useState } from 'react';
import { Image } from 'expo-image';

export default function recipe() {
  const { id } = useLocalSearchParams();
  const { getRecipeById } = useRecipes();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      const fetchedRecipe = await getRecipeById(Number(id));
      setRecipe(fetchedRecipe);
    };
    fetchRecipe();
  }, [id]);

  return (
    <SafeAreaProvider style={commonStyles.containerNavbars}>
      {recipe ? (
        <ScrollView>
          {/* @ts-ignore */}
          <Text style={textStyles.textLg}>{recipe.title}</Text>
          <Image
            style={commonStyles.recipeImage}
            source={{
              // @ts-ignore
              uri: recipe.image_url,
            }}
          />
          {/* @ts-ignore */}
          <Markdown style={textStyles.textLg}>{recipe.description}</Markdown>
        </ScrollView>
      ) : (
        <Text style={textStyles.textMd}>Recipe not found</Text>
      )}
    </SafeAreaProvider>
  );
}
