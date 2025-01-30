import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';;
import { commonStyles } from '../../styles/commonStyles';
import { supabase } from '../../api/supabase';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigator';

export default function Profile() {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const handleSignOut = async () => {
        const { error } = await supabase.auth.signOut();
        if (!error) {
        }
    };

    return (
        <View style={commonStyles.container}>
            <Text style={commonStyles.text}>¡Bienvenido al perfil!</Text>
            <TouchableOpacity style={commonStyles.button} onPress={() => navigation.navigate('InitialForm')}>
                <Text style={commonStyles.buttonText}>Initial Form</Text>
            </TouchableOpacity>
            <TouchableOpacity style={commonStyles.button} onPress={handleSignOut}>
                <Text style={commonStyles.buttonText}>Cerrar Sesión</Text>
            </TouchableOpacity>
        </View>
    );
}