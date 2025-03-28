import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image, ActivityIndicator, ScrollView, Platform, KeyboardAvoidingView, Keyboard } from 'react-native';
import { commonStyles } from '@/style/commonStyles';
import { Role } from '@/constants/Roles';
import { supabase } from '@/lib/supabase';
import { textStyles } from '@/style/textStyles';
import { inputStyles } from '@/style/inputStyles';
import { buttonStyles } from '@/style/buttonStyles';
import { colors } from '@/style/commonStyles';
import { useAssets } from 'expo-asset';
import Modal from '../Modal';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from 'expo-router';


const checkEmailWhitelist = async (email: string): Promise<[any, string]> => {
    const { data, error } = await supabase
        .rpc('is_email_whitelisted', { email_to_check: email });

    if (error) {
        console.error('Error al verificar el email:', error.message);
        return [null, error.message];
    }

    return [data[0], ""];
};

type FormErrors = {
    email?: string,
    password?: string,
    confirmPassword?: string,
}

export default function SignUp({ setSignIn }: { setSignIn: (value: boolean) => void }) {

    const [modal, setModal] = useState(false);
    const [type, setType] = useState(false);
    const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

    useEffect(() => {
        const showSubscription = Keyboard.addListener('keyboardDidShow', handleKeyboardShow);
        const hideSubscription = Keyboard.addListener('keyboardDidHide', handleKeyboardHide);

        return () => {
            showSubscription.remove();
        };
    }, []);

    // @ts-ignore
    const handleKeyboardShow = event => {
        setIsKeyboardVisible(true);
    };

    // @ts-ignore
    const handleKeyboardHide = event => {
        setIsKeyboardVisible(false);
    };

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
    const [errors, setErrors] = useState<FormErrors>({})
    const [isFormValid, setIsFormValid] = useState(false);

    const validateForm = (field: string) => {
        let newErrors = { ...errors };

        if (field == "email") {
            if (!email) {
                newErrors.email = 'El email es requerido.';
            } else if (!/\S+@\S+\.\S+/.test(email)) {
                newErrors.email = 'El email es invalido.';
            } else {
                delete newErrors.email
            }
        }

        if (field == "password") {
            if (!password) {
                newErrors.password = 'La contraseña es requerida.';
            } else if (password.length < 6) {
                newErrors.password = 'La contraseña debe contener al menos 6 caracteres.';
            } else {
                delete newErrors.password
            }
        }
        if (field == "confirmPassword") {
            if (password !== confirmPassword) {
                newErrors.confirmPassword = "Las contraseñas no coinciden";
            } else {
                delete newErrors.confirmPassword
            }
        }

        setErrors(newErrors)
        setIsFormValid(Object.keys(newErrors).length === 0);
    }

    const handleSignUp = async () => {
        setLoading(true)
        if (!isFormValid) {
            setLoading(false)
            return;
        }


        const [userEmailResponse, errorMessage] = await checkEmailWhitelist(email);

        if (errorMessage !== "") {
            setModalText(errorMessage)
            setModal(true)
            return;
        }

        if (!userEmailResponse.is_allowed) {
            setModalText("Tu email no se encuentra habilitado. Comuniquese con su empresa.")
            setModal(true)
            return;
        }

        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
            options: {
                data: {
                    "id_company": userEmailResponse.company_id,
                    "role": Role.Client,
                }
            }
        })

        if (error) {
            setModalText(error.message)
            setModal(true)
        }

        if (data?.user) {
            await AsyncStorage.setItem('id_auth', data.user.id);
            router.push('/initialForm')
        }

        setLoading(false)
    }

    const handleToggleSignIn = () => {
        setSignIn(true);
    }

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.select({ ios: 40, android: 40 })} // Adjusts for keyboard size
        >
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
                <View style={commonStyles.container}>
                    <View style={commonStyles.containerBetween}>
                        <View style={commonStyles.containerBetween}>
                            <Modal message={modalText} type={!type ? "error" : "success"} isVisible={modal} />

                            <View style={commonStyles.content}>

                                {/* @ts-ignore */}
                                {!isKeyboardVisible && <Image source={assets?.[0]} />}

                                <Text style={textStyles.titleLg}>Dumbbell</Text>

                                <TextInput
                                    style={inputStyles.input}
                                    placeholder="Correo electrónico"
                                    value={email}
                                    onChangeText={setEmail}
                                    autoCapitalize="none"
                                    keyboardType="email-address"
                                    placeholderTextColor='#DBD6C9'
                                    onBlur={() => validateForm("email")}
                                />
                                {errors.email ? <Text style={textStyles.error}>{errors.email}</Text> : null}

                                <TextInput
                                    style={inputStyles.input}
                                    placeholder="Contraseña"
                                    value={password}
                                    onChangeText={setPassword}
                                    secureTextEntry
                                    placeholderTextColor='#DBD6C9'
                                    onBlur={() => validateForm("password")}
                                />
                                {errors.password ? <Text style={textStyles.error}>{errors.password}</Text> : null}
                                <TextInput
                                    style={inputStyles.input}
                                    placeholder="Confirmar Contraseña"
                                    value={confirmPassword}
                                    onChangeText={setConfirmPassword}
                                    secureTextEntry
                                    placeholderTextColor='#DBD6C9'
                                    onBlur={() => validateForm("confirmPassword")}
                                />
                                {errors.confirmPassword ? <Text style={textStyles.error}>{errors.confirmPassword}</Text> : null}

                            </View>

                        </View>

                        <View style={commonStyles.containerEnd}>
                            <Text onPress={handleToggleSignIn} style={textStyles.span}>¿Ya tienes una cuenta? Inicia sesión</Text>
                        </View>

                        <TouchableOpacity style={buttonStyles.button}
                            disabled={!isFormValid}
                            onPress={handleSignUp}>
                            {loading ? <>
                                <ActivityIndicator size="large" color={colors.sg1} />
                            </> :
                                <Text style={textStyles.buttonText}>Registrarse</Text>
                            }
                        </TouchableOpacity>

                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}