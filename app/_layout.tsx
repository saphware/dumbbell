import { useEffect, useState } from 'react';
import { Slot, SplashScreen } from 'expo-router';
import { Session } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabase';
import { useFonts } from 'expo-font';
import { SessionProvider } from '@/providers/AuthContext';
export { ErrorBoundary } from 'expo-router';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [session, setSession] = useState<Session | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
            setLoading(false);
        });

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });
    }, []);

    // Fonts
    const [loaded, error] = useFonts({
        InterRegular: require('../assets/fonts/SpaceMono-Regular.ttf'),
    });

    useEffect(() => { if (error) throw error }, [error]);

    useEffect(() => { if (loaded) SplashScreen.hideAsync() }, [loaded]);

    if (!loaded) return null

    return (
        <SessionProvider>
            <Slot />
        </SessionProvider>
    );
}