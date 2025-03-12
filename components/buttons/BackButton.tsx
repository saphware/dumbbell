import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/style/commonStyles';
import { textStyles } from '@/style/textStyles';
import { iconStyles } from '@/style/iconStyles';
import { buttonStyles } from '@/style/buttonStyles';
import { router } from 'expo-router';

interface BackButtonProps {
    href: any;
    title: string;
}

export default function BackButton({ href, title }: BackButtonProps) {
    const handlePress = () => {
        router.replace(href);
    };

    return (
        <TouchableOpacity onPress={handlePress} style={buttonStyles.buttonBorder}>
            <View style={buttonStyles.buttonContent}>
                <Ionicons name="chevron-back" size={24} style={iconStyles.iconBackButton} color={colors.sg2} />
                <Text style={textStyles.titleSm}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

