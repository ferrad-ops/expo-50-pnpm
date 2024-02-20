import ButtonPrimary from "@/components/ButtonPrimary";
import ButtonSecondary from "@/components/ButtonSecondary";
import CurrencyBottomSheet from "@/components/CurrencyBottomSheet";
import CustomInput from "@/components/CustomInput";
import PaymentMethodBottomSheet from "@/components/PaymentMethodBottomSheet";
import SelectInput from "@/components/SelectInput";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { router } from "expo-router";
import React, { useRef, useState } from "react";
import { Keyboard, StatusBar, Text, TouchableWithoutFeedback, View } from "react-native";

const WithdrawMoney = () => {
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

  const [paymentMethod,setPaymentMethod] = useState()
  const [currency,setCurrency] = useState()

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
<View className={`flex-1  bg-bgSecondary px-10 py-5`}>
<StatusBar barStyle="light-content" />
  <View className="space-y-4">
<Text className="text-textSecondary text-center font-GilroySemiBold text-[16px]">Effectuer un dépôt</Text>
<Text className="text-textSecondary text-center font-GilroyMedium text-xs">Effectuez vos dépôts via les méthodes de paiements les plus fiables et sécurisées</Text>
 
  <View className="space-y-1">
       
       <SelectInput label="Devise" title={currency} handlePresent={handlePresentCurrencyModal} />
       <Text className="text-textSecondary font-GilroyMedium">Frais (0,0% + 0,00) frais totaux: 0,00</Text>
     </View>

<View>
  <CustomInput label="Montant" placeholder="Entrer un montant" keyboardType="numeric" value=""/>
</View>

     <View className="">
       
       <SelectInput label="Méthode de paiement" title={paymentMethod} handlePresent={handlePresentPaymentMethodModal} />
      
     </View>
     <View className="overflow-hidden rounded-lg">
         <ButtonPrimary text="continuer" handlePress={()=>router.push('/')}/>
        </View>
        <View>
          <View>
          <ButtonSecondary/>

          </View>

        </View>
  </View>
      
     
      
      
      <PaymentMethodBottomSheet setSelectedMethod={setPaymentMethod} bottomSheetRef={paymentMethodBottomSheetRef} ref={paymentMethodBottomSheetRef} />
      <CurrencyBottomSheet setSelectedItem={setCurrency} bottomSheetRef={currencyBottomSheetRef} ref={currencyBottomSheetRef} />

    </View>
    </TouchableWithoutFeedback>)
}

export default WithdrawMoney;
