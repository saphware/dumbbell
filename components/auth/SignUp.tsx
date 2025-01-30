import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { commonStyles } from '@/style/commonStyles';
import { supabase } from '@/lib/supabase';

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
            <Text style={commonStyles.text}>SignUp</Text>
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
            <TouchableOpacity onPress={handleToggleSignIn}>
                <Text style={commonStyles.span}>¿Ya tienes una cuenta? Inicia sesión</Text>
            </TouchableOpacity>
        </View>
    );
}