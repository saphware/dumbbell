import { iconStyles } from '@/style/iconStyles';
import { navbarStyles } from '@/style/navbarStyles';
import { useAssets } from 'expo-asset';
import { Link } from 'expo-router';
import React from 'react'
import { Image, Text, View } from 'react-native';
// import { RiAccountCircleFill } from 'react-icons/ri';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function TopNavbar() {

    const [assets, error] = useAssets([
        require('@/assets/images/profile.png'),
    ]);

    return (
        <SafeAreaProvider style={navbarStyles.topNav}>
            <View>
                <Text>20kg</Text>
            </View>
            <Link href={"/profile"}>
                {/* @ts-ignore */}
                <Image style={iconStyles.navIcon} source={assets?.[0]} />
            </Link>
        </SafeAreaProvider>
    )
}