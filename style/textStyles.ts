import { StyleSheet } from 'react-native';
import { colors, fontSize } from './commonStyles';

export const textStyles = StyleSheet.create({
    titleLg: {
        fontSize: fontSize.titleLg,
        color: colors.sg2,
        fontWeight: 'bold',
    },
    titleMd: {
        fontSize: fontSize.titleMd,
        color: colors.sg2,
        fontWeight: '600',
    },
    titleSm: {
        fontSize: fontSize.titleSm,
        color: colors.sg2,
        fontWeight: 'regular',
    },
    textLg: {
        fontSize: fontSize.textLg,
        color: colors.sg2,
        fontWeight: 'normal',
    },
    textMd: {
        fontSize: fontSize.textMd,
        color: colors.sg2,
        fontWeight: 'light',
    },
    textSm: {
        fontSize: fontSize.textSm,
        color: colors.sg2,
        fontWeight: 'light',
    },
    span: {
        fontSize: fontSize.textSm,
        color: colors.sg2,
        fontWeight: 'ultralight',
    },
    linkText: {
        color: colors.sg2,
        fontSize: fontSize.textMd,
        fontWeight: 'light',
        alignItems: 'flex-end',
    },
    buttonText: {
        color: colors.sg1,
        fontSize: fontSize.textMd,
        fontWeight: 'bold',
        alignItems: 'flex-end',
    },
    quotes: {
        fontSize: fontSize.textSm,
        color: colors.sg2,
        fontWeight: 'light',
        textAlign: 'center',
        // marginBottom: 12,
    }
})