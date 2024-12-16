import React from "react";
import { View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { UserAvatar } from "./../modules";

export const HeaderNav: React.FC = () => {
  return (
    <View className="w-full h-[50px] flex flex-row justify-between items-center bg-white border-b border-gray-200 px-5 pb-3">
      <View>
        <UserAvatar />
      </View>
      <View>
        <FontAwesome5 name="bell" size={24} color="black" />
      </View>
    </View>
  );
};
