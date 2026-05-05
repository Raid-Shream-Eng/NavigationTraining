import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { Pressable, StatusBar, Text, View } from "react-native";

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
              headerTitleStyle: {
                fontFamily: "Aptos",
                fontSize: 22,
                fontWeight: "700",
                color: "#fff",
              },
            }}
          />
          <Stack.Screen name="MealsView" component={MealsViewScreen} />
          <Stack.Screen
            name="MealDetails"
            component={MealDetailsScreen}
            options={{
              headerRight: () => {
                return (
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Pressable
                      onPress={() => {}}
                      style={{
                        marginRight: 10,
                        backgroundColor: "#8f6d6d",
                        padding: 8,
                        borderRadius: 8,
                      }}
                    >
                      <Text>◁ Add To Fav</Text>
                    </Pressable>
                    <Pressable
                      onPress={() => {}}
                      style={{
                        marginRight: 10,
                        backgroundColor: "#8f6d6d",
                        padding: 8,
                        borderRadius: 8,
                      }}
                    >
                      <Text>Something</Text>
                    </Pressable>
                  </View>
                );
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
