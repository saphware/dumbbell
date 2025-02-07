import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Link, useLocalSearchParams } from 'expo-router';
import { commonStyles } from '@/style/commonStyles';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { textStyles } from '@/style/textStyles';
import { buttonStyles } from '@/style/buttonStyles';
import { useRecipes } from '@/hooks/useRecipes';
import Markdown from 'react-native-markdown-display';

export default function recipe() {
  const { id } = useLocalSearchParams();
  const { getRecipeById } = useRecipes();
  const recipe = getRecipeById(Number(id));

  return (
    <SafeAreaProvider style={commonStyles.containerNavbars}>
      {recipe ? (
        <ScrollView>
          <Text style={textStyles.textLg}>{recipe.image_url}</Text>
          <Text style={textStyles.textLg}>{recipe.title}</Text>
          <Markdown>{recipe.content}</Markdown>
        </ScrollView>
      ) : (
        <Text style={textStyles.textMd}>Recipe not found</Text>
      )}
    </SafeAreaProvider>
  );
}
