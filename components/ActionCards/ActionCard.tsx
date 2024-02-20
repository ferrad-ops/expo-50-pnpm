import React from "react";
import { Pressable, Text, View } from "react-native";
import { router } from "expo-router";
import { cardProps } from "@/utils/types";

const ActionCard = ({ item }: { item: cardProps }) => {
  return (
    <View className="h-24 w-[48.5%] overflow-hidden rounded-lg">
      <Pressable
        onPress={() => router.push(item.routeName)}
        className="h-full w-full items-center justify-center space-y-3 rounded-lg border border-[#E7E5FF] bg-white p-3"
        android_ripple={{ color: "#E8E7EA", borderless: false }}
      >
        {item.icon}
        <Text className="text-center font-GilroySemiBold text-textSecondary">
          {item.title}
        </Text>
      </Pressable>
    </View>
  );
};

export default ActionCard;
