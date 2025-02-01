import { StyleSheet } from 'react-native';
import { colors } from './commonStyles';

export const navbarStyles = StyleSheet.create({
    topNav: {
        backgroundColor: colors.sg5,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 60,
        padding: 20,
        zIndex: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    bottomNav: {
        backgroundColor: colors.sg5,
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 60,
        padding: 20,
        zIndex: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
})