import { useCoach } from '@/hooks/useCoach';
import { commonStyles } from '@/style/commonStyles';
import { textStyles } from '@/style/textStyles';
import { Image } from 'expo-image';
import { View, Text } from 'react-native';

export default function coach() {
  const coach = useCoach();
  return (
    <View style={commonStyles.containerNavbars}>

      <Image
        source={{ uri: coach.user_image }}
        style={{ width: 120, height: 120, borderRadius: 60 }}
      />

      <Text style={textStyles.textLg}>{coach.id_user}</Text>
      <Text style={textStyles.textLg}>{coach.description}</Text>

    </View>
  );
}
