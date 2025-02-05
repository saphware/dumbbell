import { commonStyles } from '@/style/commonStyles';
import React from 'react';
// import { commonStyles } from '../styles/commonStyles';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import ItemList from '../components/NotesList';

export default function Home() {

  return (
    <SafeAreaProvider style={commonStyles.container}>
      {/* <ItemList /> */}
    </SafeAreaProvider>
  );
}