import { DropdownSelect } from '@/components/dropdown-select';
import { Role } from '@/constants/Roles';
import { useProfile } from '@/hooks/useProfile';
import { buttonStyles } from '@/style/buttonStyles';
import { colors, commonStyles } from '@/style/commonStyles';
import { inputStyles } from '@/style/inputStyles';
import { textStyles } from '@/style/textStyles';
import { Image } from 'expo-image';
import { Link, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
export default function activity() {

  const [selectedLanguage, setSelectedLanguage] = useState("")

  const exercises = [
    { label: "Push Up", value: "0" },
    { label: "Squat", value: "1" },
    { label: "Lunge", value: "2" },
    { label: "Plank", value: "3" },
    { label: "Burpee", value: "4" },
    { label: "Squat", value: "5" },
    { label: "Lunge", value: "6" },
    { label: "Plank", value: "7" },
    { label: "Burpee", value: "8" }
  ]

  const { id } = useLocalSearchParams();
  const profile = useProfile();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={commonStyles.containerNavbars}>
        {
          id ? (
            <>
              {profile.userData.role === Role.Client ?
                <View style={buttonStyles.buttonBorder}>
                  <View style={commonStyles.containerStart}>
                    <Text style={textStyles.titleSm}>Day</Text>
                  </View>
                </View>
                :
                <DropdownSelect
                  options={exercises}
                  selectedValue={selectedLanguage}
                  onValueChange={setSelectedLanguage}
                  placeholder="Choose an exercise"
                />
              }

              <Image
                style={commonStyles.recipeImage}
                source={{ uri: "asdasd" }}
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

              <TouchableOpacity style={buttonStyles.button}>
                <Text style={textStyles.buttonText}>Guardar</Text>
              </TouchableOpacity>

              <View style={commonStyles.cardContainer}>

                <Link href={`/activity/${id}`} style={commonStyles.halfContent}>
                  <TouchableOpacity style={buttonStyles.button}>
                    <Text style={textStyles.buttonText}>Anterior</Text>
                  </TouchableOpacity>
                </Link>

                <Link href={`/activity/${id}`} style={commonStyles.halfContent}>
                  <TouchableOpacity style={buttonStyles.button}>
                    <Text style={textStyles.buttonText}>Siguiente</Text>
                  </TouchableOpacity>
                </Link>

              </View>
            </>
          ) : (
            <Text>Exercise not found</Text>
          )}
      </View>
    </ScrollView >
  )
}