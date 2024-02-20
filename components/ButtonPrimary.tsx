import React from "react";
import { Pressable, Text, View } from "react-native";
import { ButtonProps } from "@/utils/types";

const ButtonPrimary = ({ text, handlePress }: ButtonProps) => {
  return (
    <View className="overflow-hidden rounded-md">
      <Pressable
        android_ripple={{ color: "" }}
        onPress={handlePress}
        className="bg-cornflowerBlue rounded-md p-3"
      >
        <Text className="font-GilroyMedium text-center text-[15px] text-white capitalize">
          {text}
        </Text>
      </Pressable>
    </View>
  );
};

export default ButtonPrimary;
