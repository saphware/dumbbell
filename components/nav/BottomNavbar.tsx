import { Role } from '@/constants/Roles';
import { useProfile } from '@/hooks/useProfile';
import { iconStyles } from '@/style/iconStyles';
import { navbarStyles } from '@/style/navbarStyles';
import { useAssets } from 'expo-asset';
import { Link } from 'expo-router';
import React from 'react'
import { Image } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function BottomNavbar() {

    const profile = useProfile();

    const [assets, error] = useAssets([
        require('@/assets/images/home.png'),
        require('@/assets/images/trophy.png'),
        require('@/assets/images/recipes.png'),
    ]);

    return (
        <SafeAreaProvider style={navbarStyles.bottomNav}>
            <Link href={"/"}>
                {/* @ts-ignore */}
                <Image style={iconStyles.navIcon} source={assets?.[0]} />
            </Link>
            {profile.userData.role === Role.Client &&
                <Link href={"/goals"}>
                    {/* @ts-ignore */}
                    <Image style={iconStyles.navIcon} source={assets?.[1]} />
                </Link>
            }
            <Link href={"/recipes"}>
                {/* @ts-ignore */}
                <Image style={iconStyles.navIcon} source={assets?.[2]} />
            </Link>
        </SafeAreaProvider>
    )
}