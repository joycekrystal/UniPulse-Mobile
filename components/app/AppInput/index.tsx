import React from "react";
import { TextInput, type TextInputProps } from "react-native";

type Props = {
  placeholder?: string;
};

export const AppInput: React.FC<Props & TextInputProps> = (props) => {
  return (
    <TextInput className="w-full text-xs bg-white rounded-2xl p-4" {...props} />
  );
};
