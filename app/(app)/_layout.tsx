import { Text } from 'react-native';
import { Redirect, Slot, Stack } from 'expo-router';
import { useSession } from '@/providers/AuthContext';

export default function AppLayout() {
  const { session, isLoading } = useSession();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (!session) {
    return <Redirect href="/auth" />;
  }

  return <Slot />;
}
