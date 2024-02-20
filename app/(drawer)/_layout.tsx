import { StyleSheet,  } from "react-native";
import { Drawer } from "expo-router/drawer";
import DrawerContentHeader from "@/components/Drawer/DrawerContentHeader";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
 
  
} from "@react-navigation/drawer";
import DrawerItemsList from "@/components/Drawer/DrawerItemsList";




const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  
  return (
    <DrawerContentScrollView
      {...props}
      style={{
        backgroundColor: "#2E2446",
        flex: 1,
      }}
    >
      <DrawerContentHeader />
      <DrawerItemsList/>
    </DrawerContentScrollView>
  );
};
export default function Layout() {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{ headerShown: false, drawerPosition: "right" }}
    />
  );
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