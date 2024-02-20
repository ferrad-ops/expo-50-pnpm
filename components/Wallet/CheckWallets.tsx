import React from "react";
import { Pressable, Text, View } from "react-native";
import { router } from "expo-router";
import { Feather } from "@expo/vector-icons";

// import WalletSvg from "../../assets/svg/wallet.svg";

const CheckWallets = () => {
  return (
    <View className="mt-6 mb-3 overflow-hidden rounded-lg h-14">
      <Pressable
        onPress={() => router.push("/screens/myWallets")}
        className="flex-row rounded-lg bg-[#392F6B] h-full"
        android_ripple={{ color: "" }}
      >
        <View className="w-14 items-center justify-center rounded-lg bg-[#635BFE]">
          {/* <WalletSvg /> */}
        </View>
        <View className="flex-row items-center justify-between flex-1 p-3">
          <View className="">
            <Text className="font-GilroyMedium text-xs text-white ">
              Gérez vos
            </Text>
            <Text className="text-sunshade font-GilroySemiBold text-[15px]">
              Portemonnaies
            </Text>
          </View>
          <View>
            <Feather name="arrow-right" size={24} color="white" />
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default CheckWallets;
