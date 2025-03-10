import { buttonStyles } from '@/style/buttonStyles';
import { commonStyles } from '@/style/commonStyles'
import { textStyles } from '@/style/textStyles';
import React from 'react'
import { GestureResponderEvent, Text, TouchableOpacity } from 'react-native'

export default function Button(props: { onPress: ((event: GestureResponderEvent) => void) | undefined; text: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined }) {
    return (
        <TouchableOpacity style={buttonStyles.button} onPress={props.onPress}>
            <Text style={textStyles.buttonText}>{props.text}</Text>
        </TouchableOpacity>
    )
}