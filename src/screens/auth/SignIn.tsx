import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { commonStyles } from '../../styles/commonStyles';
import { data } from '../../utils/constants';
import { supabase } from '../../api/supabase';

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
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) {
            Alert.alert('Error', error.message);
        } else {
            navigation.replace('Home');
        }
    };

    return (
        <View style={commonStyles.container}>
            <Text style={commonStyles.text}>{data.general.appName}</Text>
            <TextInput
                style={commonStyles.input}
                placeholder="Correo electrónico"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                placeholderTextColor='#DBD6C9'
            />
            <TextInput
                style={commonStyles.input}
                placeholder="Contraseña"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                placeholderTextColor='#DBD6C9'
            />
            <TouchableOpacity style={commonStyles.button} onPress={handleSignIn}>
                <Text style={commonStyles.buttonText}>Iniciar Sesión</Text>
            </TouchableOpacity>
            <Text style={commonStyles.span}>O iniciar con</Text>
            <TouchableOpacity>
                <Text style={commonStyles.span}>Olvide mi contraseña. Recuperar.</Text>
            </TouchableOpacity>
            <TouchableOpacity style={commonStyles.button} onPress={handleSignIn}>
                <Text style={commonStyles.buttonText}>Google</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={commonStyles.span}>¿No tienes una cuenta? Crear cuenta.</Text>
            </TouchableOpacity>
        </View>
    );
}