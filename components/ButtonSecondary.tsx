import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const ButtonSecondary = () => {
  return (
    <TouchableOpacity
    onPress={() => router.back()}
    className={``}
  >
    <Text className="font-GilroySemiBold text-center text-[15px] capitalize text-textSecondary">
      annuler
    </Text>
  </TouchableOpacity>
  )
}

export default ButtonSecondary