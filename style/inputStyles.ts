import { StyleSheet } from 'react-native';
import { colors } from './commonStyles';

export const inputStyles = StyleSheet.create({
    input: {
        color: colors.sg2,
        borderColor: colors.sg2,
        borderRadius: 8,
        borderWidth: 1,
        width: '100%',
        minHeight: 52,
        fontWeight: 'normal',
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    inputText: {
        width: '90%',
        minHeight: 52,
        fontWeight: 'normal',
        color: colors.sg2,
    }
})