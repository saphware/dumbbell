import { buttonStyles } from '@/style/buttonStyles'
import { colors, commonStyles } from '@/style/commonStyles'
import { inputStyles } from '@/style/inputStyles'
import { textStyles } from '@/style/textStyles'
import { Link } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { FlatList, Image, Text, TextInput, View, ImageBackground, TouchableOpacity } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useRecipes } from '@/hooks/useRecipes'
import AntDesign from '@expo/vector-icons/AntDesign';

interface RecipeButtonProps {
  title: string;
  imageUrl: string;
  id: string;
}

const RecipeButton: React.FC<RecipeButtonProps> = ({ title, imageUrl, id }) => (
  <Link href={`/recipes/recipe/${id}`} style={buttonStyles.card}>
    <ImageBackground
      source={{ uri: imageUrl }}
      style={buttonStyles.cardBackground}
      imageStyle={{ borderRadius: 10 }}
    >
      <Text style={buttonStyles.overlay}>
        {title}
      </Text>
    </ImageBackground>
  </Link>
);

export default function recipes() {
  const { getRecipes } = useRecipes();
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [fetchedRecipes, setFetchedRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      const data: any[] = await getRecipes(); // Specify the type of data
      setFetchedRecipes(data as never[]); // Store fetched recipes
      setRecipes(data as never[]); // Initialize recipes with fetched data
      setLoading(false);
    };
    fetchRecipes();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const filteredRecipes = fetchedRecipes.filter(recipe =>
        // @ts-ignore
        recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setRecipes(filteredRecipes);
    } else {
      setRecipes(fetchedRecipes); // Reset to fetched recipes if search is empty
    }
  }, [searchQuery, fetchedRecipes]); // Update recipes when searchQuery or fetchedRecipes change

  return (
    <SafeAreaProvider style={commonStyles.containerNavbars}>

      <View style={inputStyles.input}>
        <TextInput
          style={inputStyles.inputText}
          placeholder="Search recipes..."
          placeholderTextColor={colors.sg4}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <AntDesign name="search1" size={24} color={colors.sg2} />
      </View>

      {loading ? (
        <Text style={textStyles.textLg}>
          Loading...
        </Text>
      ) : (
        <FlatList
          style={buttonStyles.flatList}
          data={recipes as { id: string; title: string; image_url: string }[]}
          renderItem={({ item }: { item: { id: string; title: string; image_url: string } }) => (
            <RecipeButton title={item.title} imageUrl={item.image_url} id={item.id} />
          )}
        />
      )}

    </SafeAreaProvider>
  );
}