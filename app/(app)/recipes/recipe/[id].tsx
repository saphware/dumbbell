import { ReactNode, useEffect, useState } from 'react';
import { Text, ScrollView, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { colors, commonStyles } from '@/style/commonStyles';
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
    const customRenderRules = {
      bullet_list: (node: any, children: ReactNode[]) => (
        <View style={{ paddingLeft: 20 }}>
          {children}
        </View>
      ),
      ordered_list: (node: any, children: ReactNode[]) => (
        <View style={{ paddingLeft: 20 }}>
          {children}
        </View>
      ),
      list_item: (node: any, children: ReactNode[]) => (
        <Text style={{ color: colors.sg2 }}>
          {node.type === 'bullet_list' ? '• ' : `${node.index + 1}. `}
          {children}
        </Text>
      ),
    };

    return (
      <Text style={textStyles.textLg}>
        <Markdown
          style={{
            text: { color: colors.sg2 },
            paragraph: { color: colors.sg2 },
            heading: { color: colors.sg2 },
          }}
          rules={customRenderRules}
        >
          {content}
        </Markdown>
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

                {/* <Text style={textStyles.textLg}>{recipe.description}</Text> */}
                {/* @ts-ignore */}
                <MarkdownText content={recipe.description} />

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

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 50,
//   },
//   bigBlue: {
//     color: 'blue',
//     fontWeight: 'bold',
//     fontSize: 30,
//   },
//   red: {
//     color: 'red',
//   },
// });