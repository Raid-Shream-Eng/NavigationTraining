import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { StatusBar } from "react-native";

import type { RootStackParamList } from "./app/navigation/types";
import CategoriesScreen from "./app/Screens/CategoriesScreen";
import MealDetailsScreen from "./app/Screens/MealDetailsScreen";
import MealsViewScreen from "./app/Screens/MealsViewScreen";

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
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: "All Categories",
              headerTintColor: "#fff",
            }}
          />
          <Stack.Screen name="MealsView" component={MealsViewScreen} />
          <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
