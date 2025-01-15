import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { commonStyles } from '../styles/commonStyles';
// import { supabase } from '../api/supabase';

type RootStackParamList = {
  SignIn: undefined;
  Home: undefined;
};

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

export default function Home({ navigation }: Props) {
  const handleSignOut = async () => {
    // const { error } = await supabase.auth.signOut();
    // if (!error) {
      navigation.replace('SignIn');
    // }
  };

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.text}>¡Bienvenido a la página de inicio!</Text>
      <TouchableOpacity style={commonStyles.button} onPress={handleSignOut}>
        <Text style={commonStyles.buttonText}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
}