import { Slot } from "expo-router";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HeaderNav } from "@components/index";

export default (): JSX.Element => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View>
        <HeaderNav />
      </View>

      <Slot />
    </SafeAreaView>
  );
};
