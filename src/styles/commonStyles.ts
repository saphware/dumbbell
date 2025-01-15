import { StyleSheet } from 'react-native';

export const fontSize = {
    titleLg: 32,
    titleMd: 20,
    titleSm: 18,
    textLg: 16,
    textMd: 14,
    textSm: 12,
}

export const colors = {
    sg1: '#1C352E',
    sg2: '#DBD6C9',
    sg3: '#CBAA7B',
    sg4: '#92948A',
    sg5: '#898989',
}

export const commonStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: colors.sg1,
        color: colors.sg2,
        gap: 12,
    },
    text: {
        fontSize: fontSize.titleLg,
        color: colors.sg2,
    },
    span: {
        fontSize: fontSize.textSm,
        color: colors.sg2,
    },
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
    buttonText: {
        color: colors.sg1,
        fontWeight: 'bold',
        fontSize: fontSize.titleMd,
    },
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
    linkText: {
        color: colors.sg2,
        fontSize: 14,
        alignItems: 'flex-end',
    }
});
