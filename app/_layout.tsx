import * as SplashScreen from "expo-splash-screen";
import { Slot } from "expo-router";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

SplashScreen.hideAsync();

export default (): JSX.Element => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      <Slot />
    </SafeAreaProvider>
  );
};
