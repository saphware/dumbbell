import { View } from 'react-native'
import { useAtomValue } from 'jotai'
import { useState } from 'react'
import { Link } from 'expo-router'
import { buttonStyles } from '@/style/buttonStyles'

export default function Recipes(props: any) {

    return (
        <View key={props.id_recipe} style={buttonStyles.card}>
            <Link href={`/recipes/recipe/${props.id_recipe}`}>{props.title}</Link>
        </View>
    )
}