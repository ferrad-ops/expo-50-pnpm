import React from "react";
import { StatusBar, Text, View } from "react-native";

const RequestMoney = () => {
  return (
    <View className="flex-1 bg-bgSecondary p-5">
      <StatusBar barStyle="light-content" />
      <Text>requestMoney</Text>
    </View>
  );
};

export default RequestMoney;
