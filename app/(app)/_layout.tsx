import { Text } from 'react-native';
import { Redirect, Slot, Stack } from 'expo-router';
import { useSession } from '@/providers/AuthContext';
import TopNavbar from '@/components/nav/TopNavbar';
import BottomNavbar from '@/components/nav/BottomNavbar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { commonStyles } from '@/style/commonStyles';
import InitialForm from '@/components/dashboard/InitialForm';
import { useProfile } from '@/hooks/useProfile';
import { Role } from '@/constants/Roles';

export default function AppLayout() {
  const { session, isLoading } = useSession();
  const profile = useProfile();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (!session) {
    return <Redirect href="/auth" />;
  }

  if (profile?.userData.is_new_user) {
    return <InitialForm />;
  }

  return (
    <SafeAreaProvider style={commonStyles.mainContainer}>
      <TopNavbar />
      <Slot />
      <BottomNavbar />
    </SafeAreaProvider>
  )
}