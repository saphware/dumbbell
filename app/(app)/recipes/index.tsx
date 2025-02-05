import { buttonStyles } from '@/style/buttonStyles'
import { colors, commonStyles } from '@/style/commonStyles'
import { inputStyles } from '@/style/inputStyles'
import { textStyles } from '@/style/textStyles'
import { Link } from 'expo-router'
import React from 'react'
import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function recipes() {

  const mockRecipes = [
    {
      id_recipe: 1,
      title: "Pollo a la Parrilla",
      content: "Deliciosa receta de pollo marinado y asado",
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
      title: "Ensalada César",
      content: "Clásica ensalada con aderezo césar y crutones",
      image_url: "https://example.com/ensalada-cesar.jpg"
    },
    {
      id_recipe: 5,
      title: "Ñoquis de la abuela",
      content: "Ñoquis de la abuela",
      image_url: "https://example.com/pasta-alfredo.jpg"
    },
    {
      id_recipe: 6,
      title: "Ñoquis de la abuela",
      content: "Ñoquis de la abuela",
      image_url: "https://example.com/pasta-alfredo.jpg"
    },
    {
      id_recipe: 7,
      title: "Ñoquis de la abuela",
      content: "Ñoquis de la abuela",
      image_url: "https://example.com/pasta-alfredo.jpg"
    },
    {
      id_recipe: 8,
      title: "Ñoquis de la abuela",
      content: "Ñoquis de la abuela",
      image_url: "https://example.com/pasta-alfredo.jpg"
    }
  ];

  const [searchQuery, setSearchQuery] = React.useState('');
  const filteredRecipes = mockRecipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaProvider style={commonStyles.container}>

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
        data={filteredRecipes}
        renderItem={({ item }) => (
          <Link href={`/recipes/recipe/${item.id_recipe}`} style={buttonStyles.card}>
            <View key={item.id_recipe} style={commonStyles.overlay}>
              <Text style={textStyles.textSm}>{item.title}</Text>
            </View>
          </Link>
        )}
      />

    </SafeAreaProvider>
  );
}
