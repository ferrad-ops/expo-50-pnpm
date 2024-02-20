import React from "react";
import { Text, View } from "react-native";

// import User from "../../assets/svg/person-button-svgrepo-com.svg";
import { useUser } from "@clerk/clerk-expo";

const DrawerContentHeader = () => {
  
  const { user } = useUser();

  return (
    <View className="-mt-1 flex-row items-center bg-[#392F6B] py-[27px] pl-[24px] pr-[70px]">
      <View className="flex-row items-center space-x-3">
        {/* <User fill="#3F405B" stroke="#3F405B" /> */}

        <View>
          <Text className="text-white font-GilroyMedium">{user && user?.fullName}</Text>
          <Text className="text-white font-GilroyMedium">
            {user?.primaryEmailAddress?.emailAddress}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DrawerContentHeader;
