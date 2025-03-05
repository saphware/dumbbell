import { useEffect, useState } from 'react';
import { Text, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { commonStyles } from '@/style/commonStyles';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { textStyles } from '@/style/textStyles';
import { useRecipes } from '@/hooks/useRecipes';
import { Image } from 'expo-image';
import Markdown from 'react-native-markdown-display';
import React from 'react';

export default function recipe() {

  const { id } = useLocalSearchParams();
  const { getRecipeById } = useRecipes();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipe = async () => {
      const fetchedRecipe = await getRecipeById(Number(id));
      setRecipe(fetchedRecipe);
      setLoading(false); // Set loading to false after fetching
    };
    fetchRecipe();
  }, [id]);

  const MarkdownText = ({ content }: { content: string }) => {
    return (
      <Text style={textStyles.textLg}>
        <Markdown>{content}</Markdown>
      </Text>
    );
  }

  return (
    <SafeAreaProvider style={commonStyles.containerNavbars}>
      {loading ? (
        <Text style={textStyles.textLg}>
          Loading...
        </Text>
      ) : (
        <>
          {
            recipe ? (
              <ScrollView showsVerticalScrollIndicator={false}>

                {/* @ts-ignore */}
                <Text style={textStyles.titleMd}>{recipe.title}</Text>

                <Image
                  style={commonStyles.recipeImage}
                  source={{
                    // @ts-ignore
                    uri: recipe.image_url,
                  }}
                />

                {/* @ts-ignore */}
                <Text style={textStyles.textLg}>{recipe.description}</Text>
                {/* <MarkdownText content={recipe.description} /> */}

              </ScrollView>
            ) : (
              <Text style={textStyles.textMd}>Recipe not found</Text>
            )
          }

        </>
      )}

    </SafeAreaProvider>
  );
}
