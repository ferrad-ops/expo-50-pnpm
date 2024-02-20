// import { useUser } from "@clerk/clerk-expo";
import React from "react";
import { Text, View } from "react-native";

const UserInfo = () => {
//   const { user } = useUser();

  return (
    <View className="divide-borderPrimary divide-y-[0.6px]">
      <View className="flex-row items-center justify-between py-4">
        <Text className="capitalize font-GilroyMedium text-textSecondary">
          téléphone
        </Text>
        <Text className="capitalize font-GilroyMedium text-textSecondary">
          {/* {user?.primaryPhoneNumber?.phoneNumber} */}
        </Text>
      </View>
      <View className="flex-row items-center justify-between py-4">
        <Text className="capitalize font-GilroyMedium text-textSecondary">
          adresse
        </Text>
        <Text className="capitalize font-GilroyMedium text-textSecondary">
          1 rue charles malfray
        </Text>
      </View>
      <View className="flex-row items-center justify-between py-4">
        <Text className="capitalize font-GilroyMedium text-textSecondary">
          ville
        </Text>
        <Text className="capitalize font-GilroyMedium text-textSecondary"></Text>
      </View>
      <View className="flex-row items-center justify-between py-4">
        <Text className="capitalize font-GilroyMedium text-textSecondary">
          état
        </Text>
        <Text className="capitalize font-GilroyMedium text-textSecondary"></Text>
      </View>
      <View className="flex-row items-center justify-between py-4">
        <Text className="capitalize font-GilroyMedium text-textSecondary">
          pays
        </Text>
        <Text className="capitalize font-GilroyMedium text-textSecondary"></Text>
      </View>
      <View className="flex-row items-center justify-between py-4">
        <Text className="capitalize font-GilroyMedium text-textSecondary">
          fuseaux horaire
        </Text>
        <Text className="capitalize font-GilroyMedium text-textSecondary"></Text>
      </View>
      <View className="flex-row items-center justify-between py-4">
        <Text className="capitalize font-GilroyMedium text-textSecondary">
          portemonnaie par défaut
        </Text>
        <Text className="uppercase font-GilroyMedium text-textSecondary">
          xaf
        </Text>
      </View>
    </View>
  );
};

export default UserInfo;
