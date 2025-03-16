import { Text } from 'react-native';
import { Redirect, Slot, Stack } from 'expo-router';
import { useSession } from '@/providers/AuthContext';
import TopNavbar from '@/components/nav/TopNavbar';
import BottomNavbar from '@/components/nav/BottomNavbar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { commonStyles } from '@/style/commonStyles';

export default function AppLayout() {
  const { session, isLoading } = useSession();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  /* if (!session) {
    return <Redirect href="/auth" />;
  } */

  return (
    <SafeAreaProvider style={commonStyles.mainContainer}>
      <TopNavbar />
      <Slot />
      <BottomNavbar />
    </SafeAreaProvider>
  )
}