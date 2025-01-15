import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { commonStyles } from '../../styles/commonStyles';
// import { supabase } from '../api/supabase';

type RootStackParamList = {
    SignIn: undefined;
    SignUp: undefined;
    Home: undefined;
};

type SignInScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'SignIn'>;

type Props = {
    navigation: SignInScreenNavigationProp;
};

export default function SignIn({ navigation }: Props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = async () => {
        // const { error } = await supabase.auth.signInWithPassword({ email, password });
        // if (error) {
        //   Alert.alert('Error', error.message);
        // } else {
        navigation.replace('Home');
        // }
    };

    return (
        <View style={commonStyles.container}>
            <Text style={commonStyles.text}>Dumbbell</Text>
            <TextInput
                style={commonStyles.input}
                placeholder="Correo electrónico"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
            />
            <TextInput
                style={commonStyles.input}
                placeholder="Contraseña"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TouchableOpacity style={commonStyles.button} onPress={handleSignIn}>
                <Text style={commonStyles.buttonText}>Iniciar Sesión</Text>
            </TouchableOpacity>
            <Text onPress={() => navigation.replace('SignUp')}>No tengo una cuenta. Registrarme.</Text>
        </View>
    );
}