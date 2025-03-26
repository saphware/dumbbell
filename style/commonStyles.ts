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
    skeletonbg: '#132B24',
    skeletonhl: '#1C352E',
}

export const commonStyles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: colors.sg1,
        color: colors.sg2,
    },
    halfContent: {
        width: "50%"
    },
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 18,
        paddingVertical: 18,
        gap: 6,
        flexGrow: 1
    },
    scrollContainer: {
        width: '100%',
        height: '100%',
    },
    containerNavbars: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 18,
        paddingVertical: 90,
        gap: 6,
    },
    content: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 6,
    },
    containerBetween: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'column',
        gap: 6,
    },
    containerEnd: {
        display: 'flex',
        width: '100%',
        height: 'auto',
        alignItems: 'flex-end',
    },
    containerStart: {
        display: 'flex',
        width: '100%',
        height: 'auto',
        alignItems: 'flex-start',
        gap: 8,
    },
    recipeImage: {
        width: '100%',
        height: 240,
        borderRadius: 8,
        marginVertical: 12,
    },
    cardContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    },
});
