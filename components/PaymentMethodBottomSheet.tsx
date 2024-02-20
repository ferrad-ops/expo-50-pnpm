import { View, Text, Pressable } from 'react-native'
import React, { forwardRef, useMemo } from 'react'
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import CustomBackdrop from './BottomSheetBackdrop';
import { PaymentMethodBottomSheetProps } from '@/utils/types';



const PaymentMethodBottomSheet = forwardRef<BottomSheetModal,PaymentMethodBottomSheetProps>((props, ref) => {
    const snapPoints = useMemo(() => ["25%", "41%"], []);
  
  const paymentMethods = ['Stripe','Apple Pay','Carte Bancaire','Transfert Bancaire']
  
    const handleSelection = (paymentMethod: string) => {
     props.setSelectedMethod(paymentMethod)
     
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
              Sélectionnez une méthode de paiement
            </Text>
            <View className="divide-y divide-borderSecondary">
              {paymentMethods.map((item,index)=> (
  <Pressable key={index} android_ripple={{ color: "#E8E7EA" }} onPress={()=>handleSelection(item)} className="p-4">
                <Text className="text-center capitalize font-GilroySemiBold text-textSecondary text-[15px]">
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

export default PaymentMethodBottomSheet