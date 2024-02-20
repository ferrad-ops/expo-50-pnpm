import React, { useRef, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

type walletProps = {
  currency: string;
  isDefault: boolean;
  balance: number;
  openModal: () => void;
};

const Wallet = ({ currency, isDefault, balance, openModal }: walletProps) => {
  // const modalSheetBottomref = useRef<BottomSheetModal>(null);
  // function handlePresentModal() {
  //   modalSheetBottomref.current?.present();
  // }
  let currencySymbol: string;
  switch (currency) {
    case "eur":
      currencySymbol = "€";
      break;
    case "gbp":
      currencySymbol = "£";
      break;
    case "usd":
      currencySymbol = "$";
      break;
  }
  return (
    <Pressable
      onPress={openModal}
      android_ripple={{ color: "#E8E7EA" }}
      className="flex-row items-center justify-between p-4 mb-3 bg-white border rounded-lg border-violet-200"
    >
      <View className="flex-row items-center space-x-2">
        <View className="items-center justify-center w-8 h-8 rounded-full bg-violet-100">
          <Text className="text-lg text-blue-500 uppercase font-GilroySemiBold">
            {currencySymbol}
          </Text>
        </View>
        <Text className="text-lg uppercase font-GilroyMedium">{currency}</Text>
        {isDefault && <Text className="text-blue-400 font-GilroyMedium">(par défaut) </Text>}
      </View>
      <View className="flex-row items-center space-x-2">
        <Text className="text-lg font-GilroyMedium">{balance.toFixed(2)}</Text>
        <FontAwesome name="angle-right" size={16} color="black" />
      </View>
    </Pressable>
  );
};

export default Wallet;
