import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import { Entypo} from "@expo/vector-icons";

// import User from "../../assets/svg/person-button-svgrepo-com.svg";
import { useUser } from "@clerk/clerk-expo";

const ViewProfileCard = () => {
  const { user } = useUser();

  return (
    <View
      style={{
        top: 80,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}
      className="absolute mb-4 w-[90%] flex-row items-center justify-between self-center rounded-lg bg-[#F9F9FE] p-5"
    >
      <View className="space-y-1">
        <Text className=" font-GilroyMedium text-textSecondary">Bienvenue</Text>
        <Text className="font-GilroySemiBold text-[18px] capitalize text-textSecondary ">
          {user && user?.fullName}
        </Text>
        <TouchableOpacity
          onPress={() => router.push("/profile")}
          className="flex-row items-end"
        >
          <Text className="font-GilroySemiBold text-[15px]  text-[#635BFE]">
            Voir le profil
          </Text>
          <Entypo
            name="chevron-right"
            size={16}
            color="#635BFE"
            className="ml-1"
          />
        </TouchableOpacity>
      </View>
     
        {/* <User /> */}
      
    </View>
  );
};

export default ViewProfileCard;