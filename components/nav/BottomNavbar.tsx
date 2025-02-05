import { navbarStyles } from '@/style/navbarStyles';
import { Link } from 'expo-router';
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function BottomNavbar() {
    return (
        <SafeAreaProvider style={navbarStyles.bottomNav}>
            <Link href={"/"}>
                home
                {/* <FaHouse style={iconStyles.navIcon} /> */}
            </Link>
            <Link href={"/goals"}>
                goals
                {/* <BsTrophyFill style={iconStyles.navIcon} /> */}
            </Link>
            <Link href={"/recipes"}>
                recipes
                {/* <FaBook style={iconStyles.navIcon} /> */}
            </Link>
        </SafeAreaProvider>
    )
}