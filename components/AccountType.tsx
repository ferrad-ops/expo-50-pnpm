import { Pressable, Text, View } from "react-native";
import { AccountTypeProps } from "@/utils/types";
import { Feather, FontAwesome } from "@expo/vector-icons";

const AccountType = ({
  type,
  isCheckedMerchant,
  isCheckedUser,
  handleOnPress,
}: AccountTypeProps) => {
  return (
    <Pressable
      onPress={handleOnPress}
      className={
        isCheckedUser || isCheckedMerchant
          ? "border-cornflowerBlue bg-bgOctonary relative flex-1 flex-row items-center justify-center  rounded-md border p-4"
          : "border-borderSecondary relative flex-1 flex-row items-center justify-center  rounded-md border bg-white p-4"
      }
    >
      {isCheckedUser || isCheckedMerchant ? (
        <View className="absolute left-2 top-1">
          {/* <Feather name="check-circle" size={12} color="#635BFE" /> */}
          <FontAwesome name="check-circle" size={15} color="#635BFE" />
        </View>
      ) : null}

      <Feather
        name={type === "user" ? "user" : "home"}
        size={15}
        color={isCheckedUser || isCheckedMerchant ? "#635BFE" : "#6A6B87"}
      />

      <Text
        className={
          isCheckedUser || isCheckedMerchant
            ? "font-GilroySemiBold text-cornflowerBlue ml-2"
            : "font-GilroySemiBold text-textSecondary ml-2"
        }
      >
        {type === "user" ? "Utilisateur" : "Marchand"}
      </Text>
    </Pressable>
  );
};

export default AccountType;
