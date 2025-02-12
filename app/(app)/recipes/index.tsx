import { buttonStyles } from '@/style/buttonStyles'
import { colors, commonStyles } from '@/style/commonStyles'
import { inputStyles } from '@/style/inputStyles'
import { textStyles } from '@/style/textStyles'
import { Link } from 'expo-router'
import React from 'react'
import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useRecipes } from '@/hooks/useRecipes'

export default function recipes() {
  const { recipes } = useRecipes();
  const [searchQuery, setSearchQuery] = React.useState('');
  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
