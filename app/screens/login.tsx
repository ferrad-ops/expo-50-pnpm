// import { useState } from "react";
// import {
//   Keyboard,
//   KeyboardAvoidingView,
//   Platform,
//   Pressable,
//   StatusBar,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   TouchableWithoutFeedback,
//   View,
// } from "react-native";
// import { router } from "expo-router";
// import ButtonPrimary from "@/components/ButtonPrimary";
// import CustomInput from "@/components/CustomInput";
// import { useSignIn } from "@clerk/clerk-expo";
// import { Feather } from "@expo/vector-icons";

// const login = () => {
//   const [secureText, setSecureText] = useState(true);
//   const { signIn, setActive, isLoaded } = useSignIn();

//   const [emailAddress, setEmailAddress] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);

//   const onSignInPress = async () => {
//     if (!isLoaded) {
//       return;
//     }
//     setLoading(true);
//     try {
//       const completeSignIn = await signIn.create({
//         identifier: emailAddress,
//         password,
//       });

//       // This indicates the user is signed in
//       await setActive({ session: completeSignIn.createdSessionId });
//     } catch (err: any) {
//       alert(err.errors[0].message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <KeyboardAvoidingView
//       style={{ flex: 1 }}
//       behavior={Platform.OS === "ios" ? "padding" : "height"}
//     >
//       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//         <View className="flex-1 px-10 space-y-8 bg-bgSecondary">
//           <StatusBar backgroundColor="#392F6B" barStyle="light-content" />
//           <View className="space-y-5">
//             <View className="flex-row items-center justify-center">
//               <Text className="text-3xl text-textPrimary font-GilroyHeavy">
//                 Light
//               </Text>
//               <View className="items-center justify-center px-3 border-2 bg-cornflowerBlue border-sunshade rounded-3xl">
//                 <Text className="text-3xl text-white font-GilroyHeavy ">
//                   Pay
//                 </Text>
//               </View>
//             </View>
//             <Text className="text-lg text-center text-textSecondary font-GilroyBold">
//               Bienvenue
//             </Text>
//           </View>

//           <View className="space-y-4 ">
//             <View>
//               <CustomInput
//                 leftIcon={<Feather name="mail" size={20} color="#6A6B87" />}
//                 value={emailAddress}
//                 onChangeText={setEmailAddress}
//                 placeholder="Email"
//               />
//             </View>
//             <View>
//               <CustomInput
//                 leftIcon={<Feather name="lock" size={20} color="#6A6B87" />}
//                 value={password}
//                 onChangeText={setPassword}
//                 placeholder="Mot de passe"
//                 secureTextEntry={secureText}
//                 rightIcon=

//                     {secureText ? (
//                       <Pressable onPress={() => setSecureText(!secureText)}>
//                       <Feather name="eye-off" size={20} color="#6A6B87" />
//                       </Pressable>
//                     ) : (
//                       <Pressable onPress={() => setSecureText(!secureText)}>

//                       <Feather name="eye" size={20} color="#635BFE" />
//                       </Pressable>

//                     )}

//               />
//             </View>

//             <Text className="text-textSecondary font-GilroySemiBold">
//               Mot de passe oublié ?
//             </Text>

//             <View>
//               <ButtonPrimary text="S'identifier" handlePress={onSignInPress} />
//             </View>
//           </View>

//           <View className="flex-row self-center space-x-2">
//             <Text className="text-textSecondary font-GilroyMedium">
//               Vous n'avez pas de compte?
//             </Text>
//             <TouchableOpacity onPress={() => router.push("/screens/signup")}>
//               <Text className="text-textSecondary font-GilroyBold">
//                 S'inscrire maintenant
//               </Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </TouchableWithoutFeedback>
//     </KeyboardAvoidingView>
//   );
// };

// export default login;

import React, { useState } from "react";
import {
  Button,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import ButtonPrimary from "@/components/ButtonPrimary";
import CustomInput from "@/components/CustomInput";
import { APIResponseError, parseError } from "@/utils/authErrors";
import { Validations } from "@/utils/authValidations";
import { useSignIn } from "@clerk/clerk-expo";
import { type EmailCodeFactor } from "@clerk/types";
import { Feather } from "@expo/vector-icons";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

interface SignInInputs {
  phoneNumber: string;
}

export enum SignInFormSteps {
  PHONE,
  CODE,
}

interface SignInCodeProps {
  phoneNumber: string;
  onDone: (sessionId: string) => void;
}

const Login = () => {
  const [secureText, setSecureText] = useState(true);
  // const { signIn, setActive, isLoaded } = useSignIn();

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  // const [loading, setLoading] = useState(false);
  const { signIn, setActive, isLoaded } = useSignIn();

  const [loading, setLoading] = useState(false);

  const [formStep, setFormStep] = React.useState(SignInFormSteps.PHONE);
  const {
    control,
    handleSubmit,
    setError,
    getValues,
    formState: { errors },
  } = useForm<SignInInputs>();

  if (!isLoaded) {
    return null;
  }

  const sendSignInCode = async function (): Promise<void> {
    const phoneNumber = getValues("phoneNumber");
    console.log("phoneNumber:", phoneNumber);
    const signInAttempt = await signIn.create({
      identifier: phoneNumber,
    });

    const emailCodeFactor = signInAttempt.supportedFirstFactors.find(
      (factor) => factor.strategy === "email_code",
    ) as EmailCodeFactor;

    const result = await signInAttempt.prepareFirstFactor({
      strategy: "email_code",
      emailAddressId: emailCodeFactor.emailAddressId,
    });

    console.log({ result });
  };

  const verifyPhone = async function (): Promise<void> {
    try {
      setLoading(true);
      await sendSignInCode();
      setFormStep(SignInFormSteps.CODE);
    } catch (err: any) {
      console.log("Error:> " + err);
      console.log("Error:> " + err?.status || "");
      console.log("Error:> " + err?.errors ? JSON.stringify(err.errors) : err);
      setError("phoneNumber", {
        type: "manual",
        message: parseError(err as APIResponseError),
      });
    } finally {
      setLoading(false);
    }
  };

  const signInComplete = async (createdSessionId: string): Promise<void> => {
    /** Couldn't the signin be updated and have the createdSessionId ? */
    await setActive({ session: createdSessionId });
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView className="flex-1 p-10 space-y-8 bg-bgSecondary">
          <StatusBar backgroundColor="#F9F9FE" barStyle="dark-content" />
          <View className="space-y-5">
            <View className="flex-row items-center justify-center">
              <Text className="text-3xl text-textPrimary font-GilroyHeavy">
                Light
              </Text>
              <View className="items-center justify-center px-3 border-2 bg-cornflowerBlue border-sunshade rounded-3xl">
                <Text className="text-3xl text-white font-GilroyHeavy ">
                  Pay
                </Text>
              </View>
            </View>
            <Text className="text-lg text-center text-textSecondary font-GilroyBold">
              Bienvenue
            </Text>
          </View>

          <View className="">
            {formStep !== SignInFormSteps.PHONE && (
              <Pressable
                style={styles.button}
                onPress={() => {
                  setFormStep(SignInFormSteps.PHONE);
                }}
                className="flex-row justify-start"
              >
                <Text className="font-GilroySemiBold text-textSecondary">
                  Retour
                </Text>
              </Pressable>
            )}
            {formStep === SignInFormSteps.PHONE && (
              <View>
                <Controller
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <CustomInput
                      leftIcon={
                        <Feather name="mail" size={20} color="#6A6B87" />
                      }
                      onChangeText={(value) => onChange(value)}
                      value={value}
                      placeholder="Email"
                    />
                  )}
                  name="phoneNumber"
                  rules={Validations.phoneNumber}
                />
                {errors?.phoneNumber !== null ? (
                  <Text className="my-1 text-xs text-red-600">
                    {errors.phoneNumber?.message}
                  </Text>
                ) : null}
                <View>
                  <ButtonPrimary
                    text="S'identifier"
                    handlePress={handleSubmit(verifyPhone)}
                  />
                </View>
              </View>
            )}
            {formStep === SignInFormSteps.CODE && (
              <View className="space-y-2">
              
<Text className="font-GilroyMedium text-textSecondary">
                  Un code de vérification a été envoyé à
                </Text>
                <Text className="font-GilroySemiBold text-textSecondary">
                  {getValues("phoneNumber")}
                </Text>
              
                
                <Text className="font-GilroyMedium text-textSecondary">Veuillez le saisir ci-dessous</Text>
                <View>
<SignInCode
                  onDone={signInComplete}
                  phoneNumber={getValues("phoneNumber")}
                />
                </View>
                
                
              </View>

              
            )}
          </View>

          <View className="flex-row self-center space-x-2">
            <Text className="text-textSecondary font-GilroyMedium">
              Vous n'avez pas de compte?
            </Text>
            <TouchableOpacity onPress={() => router.push("/screens/signup")}>
              <Text className="text-textSecondary font-GilroyBold">
                S'inscrire maintenant
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export function SignInCode({
  phoneNumber,
  onDone,
}: SignInCodeProps): JSX.Element | null {
  const { isLoaded, signIn } = useSignIn();
  const [isLoading, setIsLoading] = React.useState(false);
  const [secureText, setSecureText] = useState(true);

  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<{ code: string }>();

  if (!isLoaded) {
    return null;
  }

  const verifySignInCode: SubmitHandler<{ code: string }> = async function ({
    code,
  }) {
    try {
      setIsLoading(true);
      const signInAttempt = await signIn.attemptFirstFactor({
        strategy: "email_code",
        code,
      });
      if (signInAttempt.status === "complete") {
        onDone(signInAttempt.createdSessionId ?? "");
        router.push('/')
      }
    } catch (err) {
      setError("code", {
        type: "manual",
        message: parseError(err as APIResponseError),
      });
      setIsLoading(false);
    }
  };

  const resendSignInCode = async function (): Promise<string | null> {
    const signInAttempt = await signIn.create({
      identifier: phoneNumber,
    });

    const emailCodeFactor = signInAttempt.supportedFirstFactors.find(
      (factor) => factor.strategy === "email_code",
    ) as EmailCodeFactor;

    const result = await signInAttempt.prepareFirstFactor({
      strategy: "email_code",
      emailAddressId: emailCodeFactor.emailAddressId,
    });

    console.log(result.status);

    return result.status;
  };

  return (
    <View className="space-y-5">
      <>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <CustomInput
              
              leftIcon={<Feather name="lock" size={20} color="#6A6B87" />}
              placeholder="Entrer le code"
              onChangeText={(value) => onChange(value)}
              value={value}
              keyboardType="numeric"
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
          )}
          name="code"
          rules={Validations.phoneNumber}
        />
        {errors?.code != null && (
          <Text className="px-1 text-xs text-red-600">
            {errors.code?.message}
          </Text>
        )}
      </>
      <View className="space-y-4 ">
        <ButtonPrimary
          text="Se connecter"
          handlePress={handleSubmit(verifySignInCode)
           }
        />
        <TouchableOpacity
          onPress={resendSignInCode}
          disabled={isLoading}
        
        >
          <Text className="text-center font-GilroySemiBold text-textSecondary">
            Renvoyer code
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  inputField: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderColor: "#6c47ff",
    borderRadius: 4,
    padding: 10,
    backgroundColor: "#fff",
  },
  button: {
    margin: 8,
    alignItems: "center",
  },
});

export default Login;
