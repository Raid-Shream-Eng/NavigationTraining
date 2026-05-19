import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { Pressable, StatusBar, Text, View } from "react-native";
import type { RootStackParamList } from "./app/navigation/types";
import CategoriesScreen from "./app/Screens/CategoriesScreen";
import FavoritesScreen from "./app/Screens/FavoritesScreen";
import MealDetailsScreen from "./app/Screens/MealDetailsScreen";
import MealsViewScreen from "./app/Screens/MealsViewScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function DrawerNav() {
  return (
    <Drawer.Navigator
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
        swipeEnabled: true,
        drawerType: "slide",
        drawerContentContainerStyle: {
          backgroundColor: "#300000",
          flex: 1,
        },
      }}
    >
      <Drawer.Screen
        name="MealsCategories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          headerShown: true,
          drawerActiveTintColor: "#ffdddd",
          drawerInactiveTintColor: "#fff",
          drawerActiveBackgroundColor: "#86b0ff88",
          drawerInactiveBackgroundColor: "#000",
          drawerContentStyle: { borderRadius: 0 },
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: "All Categories",
          headerShown: true,
          drawerActiveTintColor: "#ffdddd",
          drawerInactiveTintColor: "#fff",
          drawerActiveBackgroundColor: "#86b0ff88",
          drawerInactiveBackgroundColor: "#000",
          drawerContentStyle: { borderRadius: 0 },
          drawerIcon: ({ color, size }) => (
            <Ionicons name="heart" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
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
            name="DrawerNavigetor"
            component={DrawerNav}
            options={{
              headerShown: false,
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
