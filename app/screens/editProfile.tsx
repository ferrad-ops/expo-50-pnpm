import React, { useRef, useState } from "react";
import {
  Pressable,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { router } from "expo-router";
import EditProfileForm from "@/components/Profile/EditProfileForm";
import ChangeProfileImage from "@/components/Profile/ChangeProfileImage";
import ButtonBottom from "@/components/ButtonBottom";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import CurrencyBottomSheet from "@/components/CurrencyBottomSheet";




const EditProfile = () => {
  const modalSheetBottomref = useRef<BottomSheetModal>(null);
  function handlePresentModal() {
    modalSheetBottomref.current?.present();
  }
    const [selectedItem,setSelectedItem] = useState('')

  return (
    
    <View className="flex-1 bg-bgSecondary">
      <StatusBar barStyle="light-content" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        overScrollMode="never"
        className="relative p-8 "
      >
        <ChangeProfileImage/>
       
          <EditProfileForm title={selectedItem} handlePresent={handlePresentModal} />
        
      </ScrollView>
     <ButtonBottom/>
      <CurrencyBottomSheet setSelectedItem={setSelectedItem} bottomSheetRef={modalSheetBottomref} ref={modalSheetBottomref} />

    </View>
  );
};

export default EditProfile;