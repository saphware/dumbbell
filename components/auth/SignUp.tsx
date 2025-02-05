import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { commonStyles } from '@/style/commonStyles';
import { supabase } from '@/lib/supabase';
import { textStyles } from '@/style/textStyles';
import { inputStyles } from '@/style/inputStyles';
import { buttonStyles } from '@/style/buttonStyles';

export default function SignUp({ setSignIn }: { setSignIn: (value: boolean) => void }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false)

    const handleSignUp = async () => {
        setLoading(true)
        const {
            data: { session },
            error,
        } = await supabase.auth.signUp({
            email: email,
            password: password,
        })

        if (error) Alert.alert(error.message)
        if (!session) Alert.alert('Please check your inbox for email verification!')
        setLoading(false)
    }

    const handleToggleSignIn = () => {
        setSignIn(true);
    }

    return (
        <View style={commonStyles.container}>
            <Text style={textStyles.titleLg}>SignUp</Text>
            <TextInput
                style={inputStyles.input}
                placeholder="Correo electrónico"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                keyboardType="email-address"
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
            <TextInput
                style={inputStyles.input}
                placeholder="Confirmar Contraseña"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
                placeholderTextColor='#DBD6C9'
            />
            <TouchableOpacity style={buttonStyles.button} onPress={handleSignUp}>
                <Text style={textStyles.textMd}>Registrarse</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleToggleSignIn}>
                <Text style={textStyles.span}>¿Ya tienes una cuenta? Inicia sesión</Text>
            </TouchableOpacity>
        </View>
    );
}