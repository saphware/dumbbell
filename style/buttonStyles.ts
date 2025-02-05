import { StyleSheet } from 'react-native';
import { colors } from './commonStyles';

export const buttonStyles = StyleSheet.create({
    button: {
        backgroundColor: colors.sg2,
        borderRadius: 5,
        color: colors.sg2,
        fontWeight: 'bold',
        borderColor: colors.sg5,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        width: '100%',
        height: 52,
    },
    card: {
        color: colors.sg2,
        fontWeight: 'normal',
        borderRadius: 8,
        borderColor: colors.sg2,
        borderWidth: 1,
        width: '100%',
        height: 72,
        paddingHorizontal: 10,
        marginVertical: 5,
        alignItems: 'center',
        overflow: 'hidden'
    },
    flatList: {
        width: '100%',
        height: 52,
    }
})