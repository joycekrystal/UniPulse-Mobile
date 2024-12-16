import { Text, View } from "react-native";
import { SigninForm } from "@components/index";

export default (): JSX.Element => {
  return (
    <View className="flex-1 h-full">
      <SigninForm />
    </View>
  );
};
