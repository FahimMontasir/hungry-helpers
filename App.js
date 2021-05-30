import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import RestaurantScreen from "./src/features/restaurant/screens/RestaurantScreen";
import { theme } from "./src/infrastructure/theme";
import AppLoading from "expo-app-loading";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import SafeArea from "./src/components/utils/SafeArea";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurant.context";
import { LocationContextProvider } from "./src/services/locations/locations.context";
const Setting = () => (
  <SafeArea>
    <Text>setting</Text>
  </SafeArea>
);
const Map = () => (
  <SafeArea>
    <Text>map</Text>
  </SafeArea>
);
const Tab = createBottomTabNavigator();
const TAB_ICON = {
  restaurant: "food",
  setting: "account-settings",
  map: "map",
};
export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });
  if (!oswaldLoaded || !latoLoaded) {
    return <AppLoading />;
  }
  const createScreenOptions = ({ route }) => {
    const iconName = TAB_ICON[route.name];
    return {
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name={iconName} size={size} color={color} />
      ),
    };
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <NavigationContainer>
              <Tab.Navigator
                screenOptions={createScreenOptions}
                tabBarOptions={{
                  activeTintColor: "tomato",
                  inactiveTintColor: "gray",
                }}
              >
                <Tab.Screen name="restaurant" component={RestaurantScreen} />
                <Tab.Screen name="map" component={Map} />
                <Tab.Screen name="setting" component={Setting} />
              </Tab.Navigator>
            </NavigationContainer>
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}
