import React, { useRef } from "react";
import { Pressable, StatusBar, Text, View } from "react-native";
import BottomSheet from "@/components/Wallet/BottomSheet";
import Wallet from "@/components/Wallet/Wallet";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

const MyWallets = () => {
  const modalSheetBottomref = useRef<BottomSheetModal>(null);
  function handlePresentModal() {
    modalSheetBottomref.current?.present();
  }
  return (
    <View className="flex-1 bg-bgSecondary">
      <StatusBar barStyle="light-content" />

      <View className="px-5 py-7">
        <Wallet
          currency="eur"
          isDefault
          balance={0}
          openModal={handlePresentModal}
        />
        <Wallet
          currency="usd"
          isDefault={false}
          balance={500}
          openModal={handlePresentModal}
        />
        <Wallet
          currency="gbp"
          isDefault={false}
          balance={50}
          openModal={handlePresentModal}
        />
      </View>
      <BottomSheet ref={modalSheetBottomref} />
    </View>
  );
};

export default MyWallets;