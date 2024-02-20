import React from "react";
import { View } from "react-native";

import CustomInput from "../CustomInput";
import { useUser } from "@clerk/clerk-expo";
import SelectInput from "../SelectInput";
import { Entypo } from "@expo/vector-icons";
import { EditProfileFormProps } from "@/utils/types";



const EditProfileForm = ({handlePresent,title}: EditProfileFormProps) => {
  const {user} = useUser()
  return (
    <View className="space-y-4">
      <View className="flex-row  space-x-3">
        <View className="flex-1">
        <CustomInput label="Prénom" defaultValue={user?.firstName || ''} placeholder="" />

        </View>
        <View className="flex-1">
        <CustomInput label="Nom" defaultValue={user?.lastName || ''}  />

        </View>
      </View>
      <View>
      <CustomInput label="Email" defaultValue={user?.primaryEmailAddress?.emailAddress || ''} editable={false}  />

      </View>
      <View>
      <CustomInput label="Numéro de téléphone" defaultValue={user?.primaryPhoneNumber?.phoneNumber || ''}  keyboardType="phone-pad" />

      </View>
      <View>
      <CustomInput label="Adresse" defaultValue=""  />

      </View>



      <View className="flex-row  space-x-3">
        <View className="flex-1">
        <CustomInput label="Ville" defaultValue=""  />

        </View>
        <View className="flex-1">
        <CustomInput label="Etat" defaultValue=""  />

        </View>
        
      </View>
<View>
      <CustomInput label="Pays" defaultValue=""  />

</View>
<View>
      <CustomInput label="Fuseau horaire" defaultValue=""  />

</View>


      <View className="mb-16 ">
      
        <SelectInput label="Devise par défaut" title={title} handlePresent={handlePresent}  />
      </View>
    </View>
  );
};

export default EditProfileForm;
