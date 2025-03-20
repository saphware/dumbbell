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
    },
    unitButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginHorizontal: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#ccc",
        backgroundColor: "#fff",
    },
    selectedButton: {
        backgroundColor: "#007BFF", // Color de selección
        borderColor: "#007BFF",
    },
    unitText: {
        fontSize: 16,
        color: "#333",
    },
})