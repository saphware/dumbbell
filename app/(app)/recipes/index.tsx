import { buttonStyles } from '@/style/buttonStyles'
import { colors, commonStyles } from '@/style/commonStyles'
import { inputStyles } from '@/style/inputStyles'
import { textStyles } from '@/style/textStyles'
import { Link } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useRecipes } from '@/hooks/useRecipes'

export default function recipes() {
  const { getRecipes } = useRecipes();
  const [recipes, setRecipes] = useState([])

  const [searchQuery, setSearchQuery] = React.useState('');
  const [fetchedRecipes, setFetchedRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const data: any[] = await getRecipes(); // Specify the type of data
      setRecipes(data as never[]); // Cast data to the expected type
    };
    fetchRecipes();
    // console.log(recipes)
  })

  return (
    <SafeAreaProvider style={commonStyles.containerNavbars}>

      <View style={{ width: '100%', marginBottom: 10 }}>
        <TextInput
          style={inputStyles.input}
          placeholder="Search recipes..."
          placeholderTextColor={colors.sg4}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

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

    </SafeAreaProvider>
  );
}