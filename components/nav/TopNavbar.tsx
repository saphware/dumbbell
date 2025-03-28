import { iconStyles } from '@/style/iconStyles';
import { navbarStyles } from '@/style/navbarStyles';
import { useAssets } from 'expo-asset';
import { Link, useGlobalSearchParams, usePathname } from 'expo-router';
import React from 'react'
import { Image, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function TopNavbar() {

    // const glob = useGlobalSearchParams();
    const local = usePathname();

    const [assets, error] = useAssets([
        require('@/assets/images/profile.png'),
    ]);

    return (
        <SafeAreaProvider style={navbarStyles.topNav}>
            {
                local.includes("/recipes/recipe/") ? (
                    <View>
                        <Text>recipe</Text>
                    </View>
                ) : local.includes("/goals") ? (
                    <View>
                        <Text>goals</Text>
                    </View>
                ) : local.includes("/coach") ? (
                    <View>
                        <Text>coach</Text>
                    </View>
                ) : local.includes("/activity") ? (
                    <View>
                        <Text>activity</Text>
                    </View>
                ) : local.includes("/results") ? (
                    <View>
                        <Text>results</Text>
                    </View>
                ) : local.includes("/congrats") ? (
                    <View>
                        <Text>congrats</Text>
                    </View>
                ) : local.includes("/student") ? (
                    <View>
                        <Text>student</Text>
                    </View>
                ) : local.includes("/profile") ? (
                    <View>
                        <Text>profile</Text>
                    </View>
                ) : (
                    <>
                        <View>
                            <Text>20kg</Text>
                        </View>
                        <Link href={"/profile"}>
                            {/* @ts-ignore */}
                            <Image style={iconStyles.navIcon} source={assets?.[0]} />
                        </Link>
                    </>
                )
            }

        </SafeAreaProvider>
    )
}