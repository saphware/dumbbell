import React from 'react'
import { buttonStyles } from '@/style/buttonStyles';
import { textStyles } from '@/style/textStyles';
import { Text, TouchableOpacity } from 'react-native'
import { colors } from '@/style/commonStyles';
import Entypo from '@expo/vector-icons/Entypo';
import Fontisto from '@expo/vector-icons/Fontisto';

export default function IconButton(props: { icon: string; text: string; onPress: any }) {

    const Icon = () => {
        switch (props.icon) {
            case 'bug':
                return <Entypo name="bug" size={24} color={colors.sg2} />;
            case 'coach':
                return <Fontisto name="person" size={24} color={colors.sg2} />;
            default:
                return null;
        }
    }
    return (
        <TouchableOpacity style={buttonStyles.buttonIcon} onPress={props.onPress}>
            <Icon />
            <Text style={textStyles.textLg}>{props.text}</Text>
        </TouchableOpacity>
    )
}