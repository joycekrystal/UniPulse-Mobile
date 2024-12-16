import { View } from "react-native";
import { SignupForm } from "@components/index";

export default (): JSX.Element => {
  return (
    <View className="flex-1 h-full">
      <SignupForm />
    </View>
  );
};
