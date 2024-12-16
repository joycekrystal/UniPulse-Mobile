import React from "react";
import { View, Image } from "react-native";
import { imageAssets } from "@assets/index";

export const AppLogo: React.FC = () => {
  const imageSrc = imageAssets.brandLogo;

  return (
    <View>
      <Image
        source={imageSrc}
        resizeMethod="resize"
        resizeMode="contain"
        alt="brand-logo.png"
        className="h-[200px] w-[200px]"
      />
    </View>
  );
};
