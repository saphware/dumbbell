import { buttonStyles } from '@/style/buttonStyles'
import { colors, commonStyles } from '@/style/commonStyles'
import { inputStyles } from '@/style/inputStyles'
import { textStyles } from '@/style/textStyles'
import { Link } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useRecipes } from '@/hooks/useRecipes'
import AntDesign from '@expo/vector-icons/AntDesign';
import SkeletonLoading from 'expo-skeleton-loading'

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
            <Link href={`/recipes/recipe/${item.id}`} style={buttonStyles.card}>
              <View key={item.id} style={buttonStyles.overlay}>
                <Text style={textStyles.textSm}>{item.title}</Text>
              </View>
              <Image
                style={buttonStyles.cardBackground}
                source={{
                  uri: item.image_url,
                }}
              />
            </Link>
          )}
        />
      )}

    </SafeAreaProvider>
  );
}