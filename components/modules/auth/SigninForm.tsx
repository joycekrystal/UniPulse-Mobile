import React from "react";
import { View, Text, Pressable } from "react-native";
import { AppInput, AppCheckbox } from "./../../app";

export const SigninForm: React.FC = () => {
  return (
    <View className="h-full">
      <View className="flex flex-col space-y-3">
        <Text className="text-white font-bold">Sign In to your account</Text>
        <View>
          <AppInput placeholder="Student ID" />
        </View>
        <View>
          <AppInput placeholder="Password" />
        </View>
        <View className="flex flex-row justify-between px-2">
          <AppCheckbox label="Remember me" onValueChange={() => {}} />
          <Pressable>
            <Text className="text-xs text-white">Forgot Password?</Text>
          </Pressable>
        </View>
        <Pressable className="h-[40px] w-full bg-primary rounded-full justify-center items-center mt-5">
          <Text className="text-md text-black font-bold">Sign In</Text>
        </Pressable>
        <Pressable className="h-[40px] w-full justify-center items-center mt-5">
          <Text className="text-md text-white font-medium">
            Create an Account
          </Text>
        </Pressable>
      </View>
    </View>
  );
};
