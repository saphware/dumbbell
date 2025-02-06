import { useCoach } from '@/hooks/useCoach';
import { commonStyles } from '@/style/commonStyles';
import { textStyles } from '@/style/textStyles';
import { Image } from 'expo-image';
import { View, Text } from 'react-native';

export default function coach() {
  const coach = useCoach();
  return (
    <View style={commonStyles.container}>

      <Image
        source={{ uri: coach.profileImage }}
        style={{ width: 120, height: 120, borderRadius: 60 }}
      />

      <Text style={textStyles.textLg}>{coach.name}</Text>
      <Text style={textStyles.textLg}>{coach.experience}</Text>
      <Text style={textStyles.textLg}>{coach.qualifications}</Text>
      <Text style={textStyles.textLg}>{coach.philosophy}</Text>

    </View>
  );
}
