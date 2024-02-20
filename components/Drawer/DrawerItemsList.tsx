import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { router, useNavigation } from 'expo-router';
import { useAuth } from '@clerk/clerk-expo';
import { DrawerActions } from '@react-navigation/native';
import { DrawerItem } from '@react-navigation/drawer';


const HOME = "/";
const TRANSACTIONS = "/screens/transactions";
const WALLETS = "/screens/myWallets";
const SETTINGS = "/screens/settings";
const SIGNUP = "/screens/signup";

const DrawerItemsList = () => {
    const navigation = useNavigation();
const {signOut} = useAuth()
  const handleNavigation = (route: string) => {
    router.navigate(route);
    setTimeout(() => {
      navigation.dispatch(DrawerActions.closeDrawer());
    }, 1000);
  };
  return (
    <View className="divide-lavenderGray divide-y-[0.6px] p-3">
        {/* <DrawerItemList  /> */}
        <DrawerItem
          icon={() => (
            <MaterialCommunityIcons
              name="view-dashboard-outline"
              size={24}
              color={styles.itemIcon.color}
            />
          )}
          onPress={() => {
            handleNavigation(HOME);
          }}
          label="Accueil"
          labelStyle={styles.itemLabel}
          style={styles.container}
        />
        <DrawerItem
          icon={() => (
            <AntDesign name="swap" size={24} color={styles.itemIcon.color} />
          )}
          onPress={() => {
            handleNavigation(TRANSACTIONS);
          }}
          label="transactions"
          labelStyle={styles.itemLabel}
          style={styles.container}
        />
        <DrawerItem
          icon={() => (
            <MaterialCommunityIcons
              name="wallet-outline"
              size={24}
              color={styles.itemIcon.color}
            />
          )}
          onPress={() => {
            handleNavigation(WALLETS);
          }}
          label="mes portemonnaies"
          labelStyle={styles.itemLabel}
          style={styles.container}
         
        />
        <DrawerItem
          icon={() => (
            <MaterialCommunityIcons
              name="account-circle-outline"
              size={24}
              color={styles.itemIcon.color}
            />
          )}
          onPress={() => {
            handleNavigation(SIGNUP);
          }}
          label="signup"
          labelStyle={styles.itemLabel}
          style={styles.container}
         
        />
       
        <DrawerItem
          icon={() => (
            <MaterialCommunityIcons
              name="cog-outline"
              size={24}
              color={styles.itemIcon.color}
            />
          )}
          onPress={() => handleNavigation(SETTINGS)}
          label="paramètres"
          labelStyle={styles.itemLabel}
          style={styles.container}
        />
        <DrawerItem
          icon={() => (
            <MaterialCommunityIcons
              name="logout"
              size={24}
              color={styles.itemIcon.color}
            />
          )}
          onPress={signOut}
          label="déconnexion"
          labelStyle={styles.itemLabel}
          style={styles.container}
        />
      </View>
  )
}

const styles = StyleSheet.create({
  itemLabel: {
    color: "#C1BFDF",
    fontFamily: "GilroyMedium",
    textTransform: "capitalize",
    marginLeft: -15,
  },
  itemIcon: {
    color: "#C1BFDF",
  },
  container: {
    marginTop: -2,
    paddingVertical: 3,
  },
});

export default DrawerItemsList