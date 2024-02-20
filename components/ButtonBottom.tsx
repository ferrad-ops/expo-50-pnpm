import { View, Text, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const ButtonBottom = () => {
  return (
    <View className="fixed bottom-0 p-5 bg-white border-t border-t-gray-200">
        <View className="flex-row items-center justify-between ">
          <TouchableOpacity
            onPress={() => router.back()}
            className={`flex-1 px-8 py-4`}
          >
            <Text className="font-GilroySemiBold text-center text-[15px] capitalize">
              annuler
            </Text>
          </TouchableOpacity>
          <Pressable
            android_ripple={{ color: "" }}
            className={`bg-btnOctonary flex-1 rounded-lg px-8 py-4`}
          >
            <Text
              className="text-center text-[15px] capitalize font-GilroySemiBold"
             
            >
              enregistrer
            </Text>
          </Pressable>
        </View>
      </View>
  )
}

export default ButtonBottom