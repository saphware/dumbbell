import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { supabase } from '../../api/supabase';
import { RootStackParamList } from '../../navigation/AppNavigator';
import { commonStyles } from '../../styles/commonStyles';
import { data } from '../../utils/constants';

type SignUpScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'SignUp'>;

type Props = {
    navigation: SignUpScreenNavigationProp;
};

export default function SignUpScreen({ navigation }: Props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignUp = async () => {
        // if (password !== confirmPassword) {
        //   Alert.alert('Error', 'Las contraseñas no coinciden');
        //   return;
        // }

        // const { error } = await supabase.auth.signUp({ email, password });
        // if (error) {
        //   Alert.alert('Error', error.message);
        // } else {
        //   Alert.alert('Éxito', 'Registro exitoso. Por favor, verifica tu correo electrónico.', [
        //     { text: 'OK', onPress: () => navigation.navigate('SignIn') }
        //   ]);
        // }
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
                keyboardType="email-address"
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
            <TextInput
                style={commonStyles.input}
                placeholder="Confirmar Contraseña"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
                placeholderTextColor='#DBD6C9'
            />
            <TouchableOpacity style={commonStyles.button} onPress={handleSignUp}>
                <Text style={commonStyles.buttonText}>Registrarse</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                <Text style={commonStyles.span}>¿Ya tienes una cuenta? Inicia sesión</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        marginBottom: 20,
        color: '#212529',
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: '#ced4da',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: '#28a745',
        padding: 10,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
    },
    linkText: {
        color: '#007bff',
        fontSize: 14,
    },
});

