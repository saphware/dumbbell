import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import { commonStyles } from '@/style/commonStyles';
import { supabase } from '@/lib/supabase';
import { textStyles } from '@/style/textStyles';
import { inputStyles } from '@/style/inputStyles';
import { buttonStyles } from '@/style/buttonStyles';
import { useAssets } from 'expo-asset';
import Modal from '../modal';

export default function SignUp({ setSignIn }: { setSignIn: (value: boolean) => void }) {
    const [modal, setModal] = useState(false);
    const [modalText, setModalText] = useState('Please try again later');
    useEffect(() => {
        if (modal) {
            const timer = setTimeout(() => {
                setModal(false);
            }, 3000); // Close the modal after 3 seconds

            return () => clearTimeout(timer); // Cleanup the timer on unmount
        }
    }, [modal]);

    const [assets, error] = useAssets([
        require('@/assets/images/heroDumbbell.png'),
    ]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false)

    const handleSignUp = async () => {
        if (password !== confirmPassword) {
            setModalText('Las contraseñas no coinciden');
            setModal(true);
            return;
        }

        setLoading(true)

        const { data: { session }, error } = await supabase.auth.signUp({
            email: email,
            password: password,
        })

        if (error) {
            setModalText(error.message)
            setModal(true)
        } else if (!session) {
            setModalText('Please check your inbox for email verification!')
            setModal(true)
        }
        setLoading(false)
    }

    const handleToggleSignIn = () => {
        setSignIn(true);
    }

    return (
        <View style={commonStyles.container}>
            <View style={commonStyles.containerBetween}>
                <Modal message={modalText} type={'error'} isVisible={modal} />

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

                </View>

            </View>

            <View style={commonStyles.containerEnd}>
                <Text onPress={handleToggleSignIn} style={textStyles.span}>¿Ya tienes una cuenta? Inicia sesión</Text>
            </View>

            <TouchableOpacity style={buttonStyles.button} onPress={handleSignUp}>
                <Text style={textStyles.buttonText}>Registrarse</Text>
            </TouchableOpacity>

        </View>
    );
}