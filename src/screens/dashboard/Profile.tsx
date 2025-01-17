import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';;
import { commonStyles } from '../../styles/commonStyles';
import { Navbar } from '../../components/Navbar';
import { Topbar } from '../../components/Topbar';
import { supabase } from '../../api/supabase';

export default function Profile() {
    const handleSignOut = async () => {
        const { error } = await supabase.auth.signOut();
        if (!error) {
        }
    };

    return (
        <View style={commonStyles.container}>
            <Topbar />
            <Text style={commonStyles.text}>¡Bienvenido al perfil!</Text>
            <TouchableOpacity style={commonStyles.button} onPress={handleSignOut}>
                <Text style={commonStyles.buttonText}>Cerrar Sesión</Text>
            </TouchableOpacity>
            <Navbar />
        </View>
    );
}