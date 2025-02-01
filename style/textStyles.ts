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
        fontWeight: 'semibold',
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
        color: colors.sg5,
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
})