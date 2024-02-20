import React from "react";
import { Pressable, Text, View } from "react-native";
import { router } from "expo-router";
import { Feather } from "@expo/vector-icons";

// import WalletSvg from "../assets/svg/wallet.svg";

const CheckWallets = () => {
  return (
    <View className="mt-8 mb-3 overflow-hidden rounded-lg h-14">
      <Pressable
        onPress={() => router.push("/screens/myWallets")}
        className="flex-row rounded-lg bg-[#392F6B]"
        android_ripple={{ color: "#3F405B" }}
      >
        <View className="w-14 items-center justify-center rounded-lg bg-[#635BFE]">
          {/* <WalletSvg /> */}
        </View>
        <View className="flex-row items-center justify-between flex-1 p-3 pr-5">
          <View className="">
            <Text
              className="text-[11px] text-white font-GilroyMedium"
             
            >
              Consultez/Gérez vos
            </Text>
            <Text
              className="text-[15px] text-sunshade font-GilroySemiBold"
              
            >
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
