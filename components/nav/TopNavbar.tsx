import { Role } from '@/constants/Roles';
import { useProfile } from '@/hooks/useProfile';
import { iconStyles } from '@/style/iconStyles';
import { navbarStyles } from '@/style/navbarStyles';
import { useAssets } from 'expo-asset';
import { Link, useLocalSearchParams } from 'expo-router';
import React from 'react'
import { Image, Text, View } from 'react-native';
// import { RiAccountCircleFill } from 'react-icons/ri';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function TopNavbar() {

    const { user } = useLocalSearchParams<{ user: string }>();

    const profile = useProfile();

    const [assets, error] = useAssets([
        require('@/assets/images/profile.png'),
    ]);

    return (
        <SafeAreaProvider style={navbarStyles.topNav}>
            <View>
                {profile.userData.role === Role.Client &&
                    <Text>20kg</Text>
                }
                <Text>User: {user}</Text>
            </View>
            <Link href={"/profile"}>
                {/* @ts-ignore */}
                <Image style={iconStyles.navIcon} source={assets?.[0]} />
            </Link>
        </SafeAreaProvider>
    )
}