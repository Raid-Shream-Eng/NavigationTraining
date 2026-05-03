import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { StatusBar } from "react-native";

import type { RootStackParamList } from "./app/navigation/types";
import CategoriesScreen from "./app/Screens/CategoriesScreen";
import MealDescriptionScreen from "./app/Screens/MealDescriptionScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [fontsLoaded] = useFonts({
    Aptos: require("./assets/fonts/Aptos.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#300000",
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontFamily: "Aptos",
              fontSize: 20,
              fontWeight: "600",
            },
            contentStyle: {
              backgroundColor: "#300000",
            },
          }}
        >
          <Stack.Screen name="MealsCategories" component={CategoriesScreen} />
          <Stack.Screen
            name="MealDescription"
            component={MealDescriptionScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
