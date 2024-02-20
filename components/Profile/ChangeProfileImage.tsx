import { View, Text, Pressable } from 'react-native'
import React from 'react'
// import Person from "../../assets/svg/edit-profile-user.svg";
import { Feather } from "@expo/vector-icons";
const ChangeProfileImage = () => {
  return (
    <View className="relative self-center mb-10">
          {/* <Person  /> */}
          <View className="absolute bottom-0 right-0 overflow-hidden rounded-full">
<Pressable android_ripple={{color:''}} className="relative items-center justify-center rounded-full bg-textSecondary w-7 h-7">
            <Feather name="edit-3" size={14} color="white" />
          </Pressable>
          </View>
        </View>
  )
}

export default ChangeProfileImage