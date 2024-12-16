import { Slot } from "expo-router";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { AppLogo } from "@components/index";

export default (): JSX.Element => {
  return (
    <SafeAreaView className="flex-1">
      <LinearGradient
        colors={["#0e8c4a", "#0b6032", "#073019"]}
        className="absolute top-0 bottom-0 left-0 right-0"
      />

      <View className="flex-1 justify-between items-center">
        <View className="h-1/2 flex justify-center">
          <AppLogo />
          <Text className="text-xl text-white text-center font-bold mt-5">
            Uni Pulse
          </Text>
        </View>

        <View className="h-1/2 w-full px-5">
          <Slot />
        </View>
      </View>
    </SafeAreaView>
  );
};
