import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { commonStyles } from '@/style/commonStyles';
import { Link, router } from 'expo-router';
import { supabase } from '@/lib/supabase';

export default function SignIn({ setSignIn }: { setSignIn: (value: boolean) => void }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = async () => {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) {
            Alert.alert('Error', error.message);
        } else {
            router.replace('/(app)');
        }
    };

    const handleToggleSignUp = () => {
        setSignIn(false);
    }

    return (
        <View style={commonStyles.container}>
            <Text style={commonStyles.text}>SignIn</Text>
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
            {/* <TouchableOpacity style={commonStyles.button} onPress={handleSignInWithGoogle}>
                <Text style={commonStyles.buttonText}>Google</Text>
            </TouchableOpacity> */}
            <TouchableOpacity onPress={handleToggleSignUp}>
                <Text style={commonStyles.span}>¿No tienes una cuenta? Crear cuenta.</Text>
            </TouchableOpacity>
        </View>
    );
}