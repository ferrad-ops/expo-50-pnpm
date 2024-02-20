import { useEffect } from "react";
import { Pressable, StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useFonts } from "expo-font";
import { router, Slot, SplashScreen, Stack } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import LoginScreen from "./screens/login";
import '../global.css'

const clerkPublishableKey = process.env
  .EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY as string;

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const tokenCache = {
  async getToken(key: string) {},
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      // eslint-disable-next-line no-useless-return
      return;
    }
  },
};

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
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


  return (
    <ClerkProvider publishableKey={clerkPublishableKey}>
      <SignedOut>
        <LoginScreen/>
        </SignedOut>
        <SignedIn>
<GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar backgroundColor="#392F6B" barStyle="light-content" />
        <Stack
          screenOptions={{
            headerShadowVisible: false,
            animation: "slide_from_right",
            headerLeft: () => {
              return (
                <Pressable onPress={() => router.back()}>
                  <Ionicons name="arrow-back-sharp" size={24} color="white" />
                </Pressable>
              );
            },
            headerTitleStyle: {
              color: "white",
              fontFamily: "GilroySemiBold",
            },
            headerStyle: { backgroundColor: "#392F6B" },
            headerTitleAlign: "center",
          }}
        >
          <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
          <Stack.Screen
            name="screens/editProfile"
            options={{
              title: "Modifier le profil",
            }}
          />
          <Stack.Screen
            name="screens/deposit"
            options={{
              title: "Déposer de l'argent",
            }}
          />
          <Stack.Screen
            name="screens/withdrawMoney"
            options={{
              title: "Retirer de l'argent",
            }}
          />
          <Stack.Screen
            name="screens/transactions"
            options={{
              title: "Transactions",
            }}
          />
          <Stack.Screen
            name="screens/sendMoney"
            options={{
              title: "Envoyer de l'argent",
            }}
          />
          <Stack.Screen
            name="screens/requestMoney"
            options={{
              title: "Demander de l'argent",
            }}
          />
          <Stack.Screen
            name="screens/exchange"
            options={{
              title: "Echanger",
            }}
          />
          <Stack.Screen
            name="screens/myWallets"
            options={{
              title: "Mes portemonnaies",
            }}
          />
          <Stack.Screen
            name="screens/settings"
            options={{
              title: "Paramètres",
            }}
          />
        </Stack>
      </GestureHandlerRootView>
        </SignedIn>
    </ClerkProvider>
  );
}
