import { iconStyles } from '@/style/iconStyles';
import { navbarStyles } from '@/style/navbarStyles';
import { Link } from 'expo-router';
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { BsTrophyFill } from "react-icons/bs";
import { FaBook, FaHouse } from "react-icons/fa6";

export default function BottomNavbar() {
    return (
        <SafeAreaProvider style={navbarStyles.bottomNav}>
            <Link href={"/"}>
                <FaHouse style={iconStyles.navIcon} />
            </Link>
            <Link href={"/goals"}>
                <BsTrophyFill style={iconStyles.navIcon} />
            </Link>
            <Link href={"/recipes"}>
                <FaBook style={iconStyles.navIcon} />
            </Link>
        </SafeAreaProvider>
    )
}