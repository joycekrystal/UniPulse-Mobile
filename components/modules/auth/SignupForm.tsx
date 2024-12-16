import React from "react";
import { useRouter } from "expo-router";
import { View, Text, Pressable } from "react-native";
import { AppInput } from "./../../app/AppInput";

export const SignupForm: React.FC = () => {
  const router = useRouter();

  const goToSignin = () => {
    router.push("auth/signin");
  };

  return (
    <View className="h-full">
      <View className="flex flex-col space-y-3">
        <Text className="text-white font-bold">Sign Up for an account</Text>
        <View>
          <AppInput placeholder="Student ID" />
        </View>
        <View>
          <AppInput placeholder="Full Name" />
        </View>
        <View>
          <AppInput placeholder="E-mail" />
        </View>
        <View>
          <AppInput placeholder="Password" />
        </View>
        <Pressable className="h-[40px] w-full bg-primary rounded-full justify-center items-center mt-5">
          <Text className="text-md text-black font-bold">Continue</Text>
        </Pressable>
        <Pressable
          className="h-[40px] w-full justify-center items-center mt-5"
          onPress={goToSignin}
        >
          <Text className="text-md text-white font-medium">
            Already have an account? Sign In
          </Text>
        </Pressable>
      </View>
    </View>
  );
};
