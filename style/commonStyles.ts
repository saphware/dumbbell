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
    white: '#ffffff',
    black: '#000000',
    gray: '#898989',
    FireOn: '#DC2302',
    sg1: '#1C352E',
    sg2: '#DBD6C9',
    sg3: '#CBAA7B',
    sg4: '#92948A',
    sg5: '#132B24',
}

export const commonStyles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: colors.sg1,
        color: colors.sg2,
        gap: 12,
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
});
