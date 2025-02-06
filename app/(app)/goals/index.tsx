import { useProfile } from '@/hooks/useProfile';
import { buttonStyles } from '@/style/buttonStyles';
import { commonStyles } from '@/style/commonStyles';
import { inputStyles } from '@/style/inputStyles';
import { textStyles } from '@/style/textStyles';
import { Image } from 'expo-image';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

export default function goals() {
  const profile = useProfile();
  return (
    <View style={commonStyles.container}>

      <Text style={textStyles.textLg}>Entrenamiento Semanal</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', padding: 10 }}>
        {[...Array(7)].map((_, index) => (
          <View
            key={index}
            style={{
              width: 30,
              height: 30,
              borderWidth: 2,
              borderColor: '#000',
              backgroundColor: index < profile.streak ? '#000' : 'transparent',
              borderRadius: 5,
            }}
          />
        ))}
      </View>

      <Text style={textStyles.textLg}>Objetivo Fisico</Text>
      <TextInput
        style={inputStyles.input}
        placeholder={`${profile.goal}`}
        keyboardType="numeric"
      />
      <TextInput
        style={inputStyles.input}
        placeholder="+ Añadir Comentario"
        keyboardType="numeric"
      />

      <TouchableOpacity style={buttonStyles.button} disabled>
        <Text style={textStyles.textMd}>Guardar</Text>
      </TouchableOpacity>

    </View>
  );
}
