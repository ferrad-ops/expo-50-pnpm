import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Entypo } from '@expo/vector-icons'
import { SelectInputProps } from '@/utils/types'



const SelectInput = ({handlePresent,title,label}:SelectInputProps) => {
  const [isFocus,setIsFocus] = useState(false)
  return (
    <View className={label && "space-y-1"}>
         {label && (
        <Text className="font-GilroySemiBold text-textSecondary">{label}</Text>
      )}
      <Pressable onPress={handlePresent} onBlur={()=>setIsFocus(false)} onFocus={()=>setIsFocus(true)}  className={`border-borderPrimary ${isFocus && 'border-cornflowerBlue'} flex-row rounded-md border bg-white p-3 items-center justify-between space-x-3 `}
        >
         

        <Text className='flex-1 font-GilroySemiBold text-textSecondary'>
{!title ? 'Selectionner' : title}

        </Text>
        <Entypo
            name="chevron-right"
            size={16}
            color="#6A6B87"
            
          />
        </Pressable>
    </View>
  )
}

export default SelectInput