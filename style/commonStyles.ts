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
    mainContainer: {
        width: '100%',
        height: '100%',
        padding: 20,
        paddingVertical: 60,
        backgroundColor: colors.sg1,
        color: colors.sg2,
    },
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 10,
        gap: 6,
    },
    overlay: {
        position: "absolute",
        width: '100%',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#000",
        padding: 10,
        textAlign: "center",
    },
});
