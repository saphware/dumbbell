import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { commonStyles } from '../../styles/commonStyles';
import { data } from '../../utils/constants';
import { InputOTPGroup } from '../../components/InputOTPGroup';
import { InputOTP } from '../../components/InputOTP';
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

    const [otp, setOtp] = useState('');

    const handleComplete = (value: string) => {
      setOtp(value);
      console.log('OTP entered:', value);
    };

    return (
        <View style={commonStyles.container}>
            <InputOTP
                length={6}
                onComplete={handleComplete}
                containerStyle={styles.otpContainer}
                inputStyle={styles.otpInput}
            />
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

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#F5F5F5',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#333333',
    },
    otpContainer: {
      marginBottom: 20,
    },
    otpInput: {
      backgroundColor: '#FFFFFF',
      color: '#333333',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    enteredOTP: {
      fontSize: 18,
      color: '#666666',
    },
  });
  
  