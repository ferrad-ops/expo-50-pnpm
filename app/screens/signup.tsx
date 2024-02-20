import React, {  } from "react";
import { Keyboard, KeyboardAvoidingView, Platform,  StatusBar, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { router } from "expo-router";
import SignupForm from "@/components/SignupForm";

const Signup = () => {
  
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="flex-1 px-10 space-y-8 bg-bgSecondary ">
          <StatusBar backgroundColor="#392F6B" barStyle="light-content" />
          <View className="space-y-5">
            <View className="flex-row items-center justify-center">
              <Text className="text-3xl text-textPrimary font-GilroyHeavy">
                Light
              </Text>
              <View className="items-center justify-center px-3 border-2 bg-cornflowerBlue border-sunshade rounded-3xl">
                <Text className="text-3xl text-white font-GilroyHeavy ">
                  Pay
                </Text>
              </View>
            </View>
            <Text className="text-lg text-center text-textSecondary font-GilroyBold">
              Rejoignez nous maintenant
            </Text>
          </View>

<View>
          <SignupForm/>

</View>

          <View className="flex-row self-center space-x-2">
            <Text className="text-textSecondary font-GilroyMedium">
              Vous avez déjà un compte?
            </Text>
            <TouchableOpacity onPress={() => router.push("/screens/login")}>
              <Text className="text-textSecondary font-GilroyBold">
                Connectez vous maintenant
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Signup;