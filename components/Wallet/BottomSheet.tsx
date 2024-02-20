import React, { forwardRef, useMemo } from "react";
import { Pressable, Text, View } from "react-native";
import { BottomSheetModal, BottomSheetModalProvider } from "@gorhom/bottom-sheet";



import CustomBackdrop from "../BottomSheetBackdrop";


// forwardRef is because we are not allowed to pass refs to a component
const BottomSheet = forwardRef<BottomSheetModal>((props, ref) => {
  const snapPoints = useMemo(() => ["25%", "35%"], []);

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        backdropComponent={CustomBackdrop}
        ref={ref}
        snapPoints={snapPoints}
        index={1}
      >
        <View className="p-5 space-y-5">
          <Text className="font-GilroySemiBold text-center text-[16px]">
            Sélectionnez l'action
          </Text>
          <View className="divide-y-[0.5px] divide-blue-400">
            <Pressable android_ripple={{ color: "#3F405B" }} className="p-4">
              <Text className="font-GilroyMedium text-center text-[15px] text-blue-900">
                Effectuer un envoi
              </Text>
            </Pressable>
            <Pressable android_ripple={{ color: "#3F405B" }} className="p-4">
              <Text className="font-GilroyMedium text-center text-[15px] text-blue-900">
                Effectuer un dépôt
              </Text>
            </Pressable>
            <Pressable android_ripple={{ color: "#3F405B" }} className="p-4">
              <Text className="font-GilroyMedium text-center text-[15px] text-blue-900">
                Effectuer un retrait
              </Text>
            </Pressable>
          </View>
        </View>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
});

export default BottomSheet;