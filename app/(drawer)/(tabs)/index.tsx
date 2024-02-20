import React from "react";
import { StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ViewProfileCard from "@/components/Profile/ViewProfileCard";
import { DrawerToggleButton } from "@react-navigation/drawer";



import AllActionCards from "../../../components/ActionCards/AllActionCards";
import CheckWallets from "../../../components/Wallet/CheckWallets";


const Home = () => {
 
  return (
    <SafeAreaView className="flex-1 bg-bgSecondary">
       <StatusBar backgroundColor="#392F6B" barStyle="light-content" />
      <View
        style={{
          paddingVertical: 15,
          height: 160,
          backgroundColor: "#392F6B",
          position: "relative",
        }}
      >
        <View className="flex-row items-center justify-end">
          <View className="flex-row items-center justify-between w-2/3">
            <View className="flex-row">
              <Text
                className="text-3xl text-white"
                style={{ fontFamily: "GilroyHeavy" }}
              >
                Light
              </Text>
              <Text
                className="text-3xl text-[#FFAF30]"
                style={{ fontFamily: "GilroyHeavy" }}
              >
                Pay
              </Text>
            </View>

            <DrawerToggleButton tintColor="white" />
          </View>
        </View>

       

<ViewProfileCard/>

     
      </View>
      <View className="z-0 p-5 ">
        <CheckWallets />
        <AllActionCards />
      </View>
    </SafeAreaView>
  );
};

export default Home;