import React from "react";
import { Keyboard, KeyboardAvoidingView, Platform, StatusBar, Text, TouchableWithoutFeedback, View } from "react-native";
import EditProfileCard from "@/components/Profile/EditProfileCard";
import UserInfo from "@/components/UserInfo";





const Profile = () => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
<View className="flex-1 p-6 bg-bgSecondary">
      <StatusBar barStyle="light-content" />
      <View className="space-y-5">
<View>
        <EditProfileCard />
      </View>
      <View className="flex-row items-center justify-between">
        <View className="flex-1 flex-row items-center justify-between rounded-lg bg-[#392F6B] p-3  ">
          <Text
          
            className="text-xs text-white font-GilroyMedium"
            
          >
            Nbr de portemonnaies
          </Text>
          <Text
            
            className="text-3xl uppercase text-sunshade font-GilroyMedium"
          >
            3
          </Text>
        </View>
        <View className="ml-3 flex-1 flex-row items-center justify-between rounded-lg bg-[#635BFE] p-3 ">
          <View>
            <Text
              className="text-xs text-white font-GilroyMedium"
              
            >
              Nbr de transactions
            </Text>
            <Text
              
              className="text-xs text-white font-GilroyMedium"
            >
              Derniers 30 jours
            </Text>
          </View>

          <Text
           
            className="text-3xl text-white capitalize font-GilroyMedium"
          >
            0
          </Text>
        </View>
      </View>
      <View>
        <UserInfo />
      </View>
      </View>
      
    </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Profile;