import React from "react";
import { StatusBar, Text, View } from "react-native";

const Transactions = () => {
  return (
    <View className="flex-1 bg-bgSecondary p-5">
      <StatusBar barStyle="light-content" />
      <View className="h-16 items-center justify-center rounded-lg bg-white">
        <Text className="font-GilroyMedium text-center text-[15px] text-neutral-400">
          Aucun historique de transaction
        </Text>
      </View>
    </View>
  );
};

export default Transactions;