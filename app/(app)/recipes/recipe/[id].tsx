import { View, Text, TouchableOpacity } from 'react-native';
import { Link, useLocalSearchParams } from 'expo-router';
import { commonStyles } from '@/style/commonStyles';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { textStyles } from '@/style/textStyles';
import { buttonStyles } from '@/style/buttonStyles';


export default function recipe() {
  const { id } = useLocalSearchParams();
  return (
    <SafeAreaProvider style={commonStyles.container}>
      <Text style={textStyles.textMd}>Details of recipe {id} </Text>
    </SafeAreaProvider>
  );
}
