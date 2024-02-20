import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import { Entypo } from "@expo/vector-icons";

// import User from "../../assets/svg/person-button-svgrepo-com.svg";
import { useUser } from "@clerk/clerk-expo";

const EditProfileCard = () => {
  const { user } = useUser();

  return (
    <View
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
      }}
      className="flex-row items-center self-center w-full p-5 space-x-4 bg-white rounded-lg"
    >
      <View className="border-2 rounded-full border-borderPrimary">
        {/* <User style={{ margin: 2 }} /> */}
      </View>

      <View className="space-y-1">
        <Text
          
          className="text-[15px] capitalize font-GilroySemiBold text-textSecondary"
        >
          {user && user?.fullName}
        </Text>
        <Text className="text-xs font-GilroyMedium text-textSecondary">
         {user?.primaryEmailAddress?.emailAddress}
        </Text>
        <TouchableOpacity
          onPress={() => router.push("/screens/editProfile")}
          className="flex-row items-end space-x-1"
        >
          <Text className="font-GilroySemiBold text-[15px] text-[#635BFE]">
            Modifier le profil
          </Text>
          <Entypo name="chevron-right" size={16} color="#635BFE" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditProfileCard;
