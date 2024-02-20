import { View, Text, Pressable } from 'react-native'
import React, { forwardRef, useMemo } from 'react'
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import CustomBackdrop from './BottomSheetBackdrop';
import { CurrencyBottomSheetProps } from '@/utils/types';


const CurrencyBottomSheet = forwardRef<BottomSheetModal,CurrencyBottomSheetProps>((props, ref) => {
  const snapPoints = useMemo(() => ["25%", "35%"], []);

const currencies = ['GBP','EUR','USD']

  const handleSelection = (currency: string) => {
   props.setSelectedItem(currency)
   
 props.bottomSheetRef.current?.dismiss()
   
  }
  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        backdropComponent={CustomBackdrop}
        ref={ref}
        snapPoints={snapPoints}
        index={1}
      >
        <View className="p-5 space-y-5">
          <Text className="text-[17px] text-center font-GilroySemiBold text-textSecondary">
            Sélectionnez une devise
          </Text>
          <View className="divide-y divide-borderSecondary">
            {currencies.map((item,index)=> (
<Pressable key={index} android_ripple={{ color: "#E8E7EA" }} onPress={()=>handleSelection(item)} className="p-4">
              <Text className="text-center uppercase font-GilroySemiBold text-textSecondary text-[15px]">
                {item}
              </Text>
            </Pressable>
            ))}
            
           
          </View>
        </View>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
});


export default CurrencyBottomSheet