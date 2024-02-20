import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import "../global.css"
import { useColorScheme } from '@/components/useColorScheme';
import { ClerkProvider } from '@clerk/clerk-expo';
import { GestureHandlerRootView } from "react-native-gesture-handler";

const clerkPublishableKey = process.env
  .EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY as string;

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    GilroyThin: require("../assets/fonts/gilroy/Gilroy-Thin.ttf"),
    GilroyLight: require("../assets/fonts/gilroy/Gilroy-Light.ttf"),
    GilroyRegular: require("../assets/fonts/gilroy/Gilroy-Regular.ttf"),
    GilroyMedium: require("../assets/fonts/gilroy/Gilroy-Medium.ttf"),
    GilroySemiBold: require("../assets/fonts/gilroy/Gilroy-SemiBold.ttf"),
    GilroyBold: require("../assets/fonts/gilroy/Gilroy-Bold.ttf"),
    GilroyHeavy: require("../assets/fonts/gilroy/Gilroy-Heavy.ttf"),
    GilroyBlack: require("../assets/fonts/gilroy/Gilroy-Black.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ClerkProvider publishableKey={clerkPublishableKey}>
      <GestureHandlerRootView style={{ flex: 1 }}>
  <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
      </Stack>
      </GestureHandlerRootView>
    
        </ClerkProvider>

   
  );
}
