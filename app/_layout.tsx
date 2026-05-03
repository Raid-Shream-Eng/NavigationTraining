import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Aptos: require("../assets/fonts/Aptos.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <StatusBar barStyle={"light-content"} />
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}
