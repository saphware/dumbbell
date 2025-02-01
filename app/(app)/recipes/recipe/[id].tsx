import { View, Text, TouchableOpacity } from 'react-native';
import { Link, useLocalSearchParams } from 'expo-router';
import { commonStyles } from '@/style/commonStyles';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function recipe() {
  const { id } = useLocalSearchParams();
  return (
    <SafeAreaProvider style={commonStyles.container}>
      <TouchableOpacity style={commonStyles.button}>
        <Link href={"/"}>Go Home</Link>
      </TouchableOpacity>
      <Text style={commonStyles.text}>Details of recipe {id} </Text>
    </SafeAreaProvider>
  );
}
