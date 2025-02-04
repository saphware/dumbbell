import { StyleSheet } from 'react-native';
import { colors } from './commonStyles';

export const inputStyles = StyleSheet.create({
    input: {
        color: colors.sg2,
        fontWeight: 'normal',
        borderRadius: 8,
        borderColor: colors.sg2,
        borderWidth: 1,
        width: '100%',
        height: 52,
        paddingHorizontal: 10,
    },
})