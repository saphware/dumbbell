import { commonStyles } from '@/style/commonStyles';
import { useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native';

export default function activity() {
  const { id } = useLocalSearchParams();

  return (
    <View style={commonStyles.containerNavbars}>
      {id ? (
        <Text>Activity</Text>
      ) : (
        <Text>Exercise not found</Text>
      )}
    </View>
  );
}