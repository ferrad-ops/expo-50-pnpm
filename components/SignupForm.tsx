import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import AccountType from './AccountType'
import CustomInput from './CustomInput';
import { Feather } from '@expo/vector-icons';
import ButtonPrimary from './ButtonPrimary';

const SignupForm = () => {
    const [secureText, setSecureText] = useState(true);
  const [isCheckedUser, setIsCheckedUser] = useState(true);
  const [isCheckedMerchant, setIsCheckedMerchant] = useState(false);
  const handleSelection = (type: string) => {
    if (type == "user") {
      setIsCheckedUser(true);
      setIsCheckedMerchant(false);
    } else {
      setIsCheckedUser(false);
      setIsCheckedMerchant(true);
    }
  };
  return (
   <View className="space-y-4 ">
            <View>
              <CustomInput
                leftIcon={<Feather name="user" size={20} color="#6A6B87" />}
                placeholder="Prénom"
              />
            </View>
            <View>
              <CustomInput
                leftIcon={<Feather name="user" size={20} color="#6A6B87" />}
                placeholder="Nom de famille"
              />
            </View>
            <View>
              <CustomInput
                leftIcon={<Feather name="mail" size={20} color="#6A6B87" />}
                placeholder="Email"
              />
            </View>
            <View>
              <CustomInput
                leftIcon={<Feather name="phone" size={20} color="#6A6B87" />}
                placeholder="Numéro de téléphone"
                keyboardType="phone-pad"
              />
            </View>
            <View>
              <CustomInput
                leftIcon={<Feather name="lock" size={20} color="#6A6B87" />}
                placeholder="Mot de passe"
                secureTextEntry={secureText}
                rightIcon={
                  secureText ? (
                    <Pressable onPress={() => setSecureText(!secureText)}>
                      <Feather name="eye-off" size={20} color="#6A6B87" />
                    </Pressable>
                  ) : (
                    <Pressable onPress={() => setSecureText(!secureText)}>
                      <Feather name="eye" size={20} color="#635BFE" />
                    </Pressable>
                  )
                }
              />
            </View>

            <View className="space-y-2">
              <Text className="text-textSecondary font-GilroySemiBold">
                Selectionnez type de compte
              </Text>
              <View className="flex-row space-x-2">
                <AccountType
                  type="user"
                  isCheckedUser={isCheckedUser}
                  handleOnPress={() => handleSelection("user")}
                />
                <View></View>
                <AccountType
                  type="merchant"
                  isCheckedMerchant={isCheckedMerchant}
                  handleOnPress={() => handleSelection("merchant")}
                />
              </View>
            </View>
            <Text className="font-GilroyMedium text-textSecondary text-center text-xs">
              En créant un compte, vous acceptez nos conditions
            </Text>
            <View>
              <ButtonPrimary text="Créer un compte" handlePress={() => {}} />
            </View>
          </View>
  )
}

export default SignupForm