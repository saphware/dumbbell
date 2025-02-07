import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import { commonStyles } from '@/style/commonStyles';
import { Link, router } from 'expo-router';
import { supabase } from '@/lib/supabase';
import { textStyles } from '@/style/textStyles';
import { buttonStyles } from '@/style/buttonStyles';
import { inputStyles } from '@/style/inputStyles';
import { useAssets } from 'expo-asset';

export default function SignIn({ setSignIn }: { setSignIn: (value: boolean) => void }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [assets, error] = useAssets([
        require('@/assets/images/heroDumbbell.png'),
    ]);

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

            <View style={commonStyles.containerBetween}>
                <View style={commonStyles.content}>
                    {/* @ts-ignore */}
                    <Image source={assets?.[0]} />

                    <Text style={textStyles.titleLg}>Dumbbell</Text>

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



                    <View style={commonStyles.containerEnd}>
                        <Text style={textStyles.span}>Olvide mi contraseña. Recuperar.</Text>
                    </View>

                    {/* <Text style={textStyles.span}>O iniciar con</Text> */}

                    {/* <TouchableOpacity style={commonStyles.button} onPress={handleSignInWithGoogle}>
                <Text style={commonStyles.buttonText}>Google</Text>
                </TouchableOpacity> */}


                </View>

                <View style={commonStyles.containerEnd}>
                    <Text onPress={handleToggleSignUp} style={textStyles.span}>¿No tienes una cuenta? Crear cuenta.</Text>
                </View>

                <TouchableOpacity style={buttonStyles.button} onPress={handleSignIn}>
                    <Text style={textStyles.buttonText}>Iniciar Sesión</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}