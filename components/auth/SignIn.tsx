import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import { commonStyles } from '@/style/commonStyles';
import { Link, router } from 'expo-router';
import { supabase } from '@/lib/supabase';
import { textStyles } from '@/style/textStyles';
import { buttonStyles } from '@/style/buttonStyles';
import { inputStyles } from '@/style/inputStyles';
import HeroImage from '../HeroImage';

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

            {/* <HeroImage /> */}
            {/* <Image source={}/> */}

            <Text style={textStyles.titleLg}>SignIn</Text>

            <TextInput
                style={inputStyles.input}
                placeholder="Correo electrónico"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                placeholderTextColor='#DBD6C9'
            />
            <TextInput
                style={inputStyles.input}
                placeholder="Contraseña"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                placeholderTextColor='#DBD6C9'
            />

            <TouchableOpacity style={buttonStyles.button} onPress={handleSignIn}>
                <Text style={textStyles.textMd}>Iniciar Sesión</Text>
            </TouchableOpacity>


            <TouchableOpacity>
                <Text style={textStyles.span}>Olvide mi contraseña. Recuperar.</Text>
            </TouchableOpacity>

            {/* <Text style={textStyles.span}>O iniciar con</Text> */}

            {/* <TouchableOpacity style={commonStyles.button} onPress={handleSignInWithGoogle}>
                <Text style={commonStyles.buttonText}>Google</Text>
            </TouchableOpacity> */}

            <TouchableOpacity onPress={handleToggleSignUp}>
                <Text style={textStyles.span}>¿No tienes una cuenta? Crear cuenta.</Text>
            </TouchableOpacity>
        </View>
    );
}