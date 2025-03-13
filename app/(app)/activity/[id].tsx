import { buttonStyles } from '@/style/buttonStyles';
import { colors, commonStyles } from '@/style/commonStyles';
import { inputStyles } from '@/style/inputStyles';
import { textStyles } from '@/style/textStyles';
import { Image } from 'expo-image';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';

export default function activity() {
  const { id } = useLocalSearchParams();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={commonStyles.containerNavbars}>
        {id ? (
          <>
            <View style={buttonStyles.buttonBorder}>
              <View style={commonStyles.containerStart}>
                <Text style={textStyles.titleSm}>Day</Text>
              </View>
            </View>

            <Image
              style={commonStyles.recipeImage}
              source={{
                uri: "asdasd",
              }}
            />

            <View style={inputStyles.input}>
              <TextInput
                style={inputStyles.inputText}
                placeholderTextColor={colors.sg2}
                placeholder={`+ Añadir Comentario`}
              />
            </View>

            <View style={inputStyles.input}>
              <TextInput
                style={inputStyles.inputText}
                placeholderTextColor={colors.sg2}
                placeholder={`Series`}
              />
            </View>

            <View style={inputStyles.input}>
              <TextInput
                style={inputStyles.inputText}
                placeholderTextColor={colors.sg2}
                placeholder={`Repeticiones`}
              />
            </View>

            <View style={inputStyles.input}>
              <TextInput
                style={inputStyles.inputText}
                placeholderTextColor={colors.sg2}
                placeholder={`Kg`}
              />
            </View>

            <TouchableOpacity style={buttonStyles.button} disabled>
              <Text style={textStyles.buttonText}>Guardar</Text>
            </TouchableOpacity>

            <View style={commonStyles.cardContainer}>

              <TouchableOpacity style={buttonStyles.buttonHalf} disabled>
                <Text style={textStyles.buttonText}>Anterior</Text>
              </TouchableOpacity>

              <TouchableOpacity style={buttonStyles.buttonHalf} disabled>
                <Text style={textStyles.buttonText}>Siguiente</Text>
              </TouchableOpacity>

            </View>
          </>
        ) : (
          <Text>Exercise not found</Text>
        )}
      </View>
    </ScrollView>
  );
}