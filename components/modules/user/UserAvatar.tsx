import React from "react";
import { View, Text } from "react-native";

type Props = {};

export const UserAvatar: React.FC<Props> = (props) => {
  return (
    <View className="h-[30px] flex flex-row items-center border border-gray-300 rounded-lg pl-1 pr-3">
      <View className="h-[20px] w-[20px] bg-gray-200 rounded-full mr-4" />
      <Text className="text-xs font-bold">John Doe</Text>
    </View>
  );
};
