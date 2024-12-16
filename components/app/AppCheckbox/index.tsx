import React from "react";
import Checkbox from "expo-checkbox";
import { View, Text } from "react-native";

type Props = {
  label: string;
  theme?: "light" | "dark";
  isChecked?: boolean;
  onValueChange: () => void;
};

export const AppCheckbox: React.FC<Props> = (props) => {
  const [checked, setChecked] = React.useState<boolean>(false);

  const textColor = props.theme
    ? props.theme === "light"
      ? "text-white"
      : "text-black"
    : "text-white";

  const toggleChecked = () => {
    setChecked(!checked);
    props.onValueChange();
  };

  return (
    <View className="flex flex-row items-center space-x-1">
      <Checkbox
        value={checked}
        onValueChange={toggleChecked}
        className="h-4 w-4 rounded border border-white"
      />
      <Text className={`${textColor} text-xs`} onPress={toggleChecked}>
        {props.label}
      </Text>
    </View>
  );
};
