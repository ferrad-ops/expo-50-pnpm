import React, { useState } from "react";
import {  Text, TextInput, View } from "react-native";
import { CustomInputProps } from "@/utils/types";

const CustomInput = ({
  label = "",
  placeholder,
  keyboardType = "default",
  defaultValue,
  multiline,
  autoFocus,
  value,
  onChangeText,
  onChange,
  leftIcon,
  rightIcon,
editable = true,
  secureTextEntry,
 
}: CustomInputProps) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View className={label && "space-y-1"}>
      {label && (
        <Text className="font-GilroySemiBold text-textSecondary">{label}</Text>
      )}
      <View
        className={`border-borderPrimary flex-row rounded-md border bg-white p-2 ${!editable && 'bg-bgSecondaryVariant border-btnQuinary'} ${isFocus && 'border-cornflowerBlue'} ${leftIcon || rightIcon ? 'px-3 py-2 items-center justify-between space-x-3' : '' }
        `}
      >
       
          {leftIcon}
          <TextInput
            onChangeText={onChangeText}
            onChange={onChange}
            value={value}
            keyboardType={keyboardType}
            defaultValue={defaultValue}
            placeholder={placeholder}
            multiline={multiline}
            autoFocus={autoFocus}
            placeholderTextColor="#9998A0"
            cursorColor="#3F405B"
            className={`flex-1 font-GilroySemiBold text-textSecondary ${!editable && 'text-textOctonaryVariant'}`}
            secureTextEntry={secureTextEntry}
            editable={editable}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
          />
        
       
        {rightIcon}
      </View>
    </View>
  );
};

export default CustomInput;
