import { iconStyles } from '@/style/iconStyles';
import { navbarStyles } from '@/style/navbarStyles';
import { Link } from 'expo-router';
import React from 'react'
// import { RiAccountCircleFill } from 'react-icons/ri';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function TopNavbar() {
    return (
        <SafeAreaProvider style={navbarStyles.topNav}>
            <Link href={"/"}>
            home
                {/* <RiAccountCircleFill style={iconStyles.navIcon} /> */}
            </Link>
            <Link href={"/profile"}>
            profile
                {/* <RiAccountCircleFill style={iconStyles.navIcon} /> */}
            </Link>
        </SafeAreaProvider>
    )
}