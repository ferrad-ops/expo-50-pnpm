import { View, Text } from 'react-native'
import React, { useRef, useState } from 'react'
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { Keyboard, StatusBar, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import CurrencyBottomSheet from '@/components/CurrencyBottomSheet';

const Deposit = () => {
    const currencyBottomSheetRef = useRef<BottomSheetModal>(null);
  const paymentMethodBottomSheetRef = useRef<BottomSheetModal>(null);
  function handlePresentCurrencyModal() {
    Keyboard.dismiss();
    currencyBottomSheetRef.current?.present();
  }
  function handlePresentPaymentMethodModal() {
    Keyboard.dismiss();
    paymentMethodBottomSheetRef.current?.present();
  }

  const [paymentMethod,setPaymentMethod] = useState('')
  const [currency,setCurrency] = useState('')
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
<View className={`flex-1  bg-bgSecondary px-10 py-5`}>
        <StatusBar barStyle="light-content" />
        <View>
<TouchableOpacity onPress={() => handlePresentCurrencyModal()}>
                  <Text>Click</Text>
              </TouchableOpacity>
        </View>
      <CurrencyBottomSheet setSelectedItem={setCurrency} bottomSheetRef={currencyBottomSheetRef} ref={currencyBottomSheetRef} />
              
      </View>
      
          </TouchableWithoutFeedback>
  )
}

export default Deposit