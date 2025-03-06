import { useProfile } from '@/hooks/useProfile';
import { buttonStyles } from '@/style/buttonStyles';
import { colors, commonStyles } from '@/style/commonStyles';
import { inputStyles } from '@/style/inputStyles';
import { textStyles } from '@/style/textStyles';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import React, { useEffect, useState } from 'react';

export default function goals() {
  const profile = useProfile();
  const daysInAWeek = 7;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!profile) {
      setLoading(true)
    } else {
      setLoading(false)
    }
  }, [profile]);

  return (
    <View style={commonStyles.containerNavbars}>

      <ScrollView style={{width:'100%'}} showsVerticalScrollIndicator={false}>

        <View style={commonStyles.content}>
          <View style={commonStyles.containerStart}>
            <Text style={textStyles.titleSm}>Entrenamiento Semanal</Text>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', padding: 10 }}>

            {loading ? (
              <Text style={textStyles.textLg}>
                Loading...
              </Text>
            ) : (
              <>
                {[...Array(daysInAWeek)].map((_, index) => (
                  <MaterialCommunityIcons name="kettlebell"
                    size={40}
                    color={index < (profile.clientData?.streak || 0) ? colors.sg3 : colors.sg4} />
                ))}
              </>
            )}

          </View>

          <View style={commonStyles.containerStart}>
            <Text style={textStyles.titleSm}>Objetivo Fisico</Text>
          </View>

          <View style={inputStyles.input}>
            <TextInput
              style={inputStyles.inputText}
              placeholderTextColor={colors.sg2}
              placeholder={`${profile.clientData?.goal}`}
              keyboardType="numeric"
            />
          </View>

          <View style={inputStyles.input}>
            <TextInput
              style={inputStyles.inputText}
              placeholderTextColor={colors.sg2}
              multiline={true}
              placeholder="+ Añadir Comentario"
            />
          </View>

          <TouchableOpacity style={buttonStyles.button} disabled>
            <Text style={textStyles.textMd}>Guardar</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </View>
  );
}
