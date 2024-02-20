import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { KeyboardTypeOptions, NativeSyntheticEvent, TextInputChangeEventData } from "react-native";





export type CustomInputProps = {
  label?: string;
  placeholder?: string;
  defaultValue?: string;
  keyboardType?: KeyboardTypeOptions;
  multiline?: boolean;
  autoFocus?: boolean;
  value?: string;
  onChangeText?: (text: string) => void;
  onChange?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  rightIcon?: any;
  leftIcon?: any;
editable?:boolean
  secureTextEntry?: boolean;
 
};

export type SelectInputProps ={
  handlePresent: ()=>void
  title?: string,
  label? : string
}

export type CurrencyBottomSheetProps={
  bottomSheetRef : React.RefObject<BottomSheetModal>
setSelectedItem: any
}

export type PaymentMethodBottomSheetProps={
  bottomSheetRef : React.RefObject<BottomSheetModal>
setSelectedMethod: any
}

export type EditProfileFormProps = {
  handlePresent : ()=> void
  title: string
}

export type ButtonProps = {
  text: string;
  handlePress: () => void;
};

export type cardProps = {
  title: string;
  icon: any;
  routeName: any;
};

export type AccountTypeProps = {
  type: string;
  isCheckedUser?: boolean;
  isCheckedMerchant?: boolean;
  handleOnPress: () => void;
};
