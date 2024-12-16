import React from "react";
import { View, ActivityIndicator } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AppLogo } from "./app/AppLogo";

export const SplashScreen: React.FC = () => {
  return (
    <View className="flex-1 flex-col gap-y-3 justify-center items-center relative">
      <LinearGradient
        colors={["#0e8c4a", "#0b6032", "#073019"]}
        className="absolute top-0 bottom-0 left-0 right-0"
      />

      <AppLogo />
      <View className="pt-10">
        <ActivityIndicator />
      </View>
    </View>
  );
};
