import type { RootStackParamList } from "@/app/navigation/types";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

type MealItemProps = {
  id: string;
  title: string;
  imageUrl: string;
  affordability: string;
  complexity: string;
  duration: number;
  onPress: () => void;
};

function MealItem({
  id,
  title,
  imageUrl,
  affordability,
  complexity,
  duration,
  onPress,
}: MealItemProps) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  function selectMealItemHandler() {
    navigation.navigate("MealDetails", {
      mealId: id,
    });
  }

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#404000" }}
        style={({ pressed }) => {
          pressed ? styles.ButtonPressed : null;
        }}
        onPress={selectMealItemHandler}
      >
        <View style={styles.innerContainer}>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
          </View>
          <View>
            <Text style={styles.detailsTitle}>Details :</Text>
            <View style={styles.detailsContainer}>
              <Text style={styles.detailText}>{duration} minutes</Text>
              <Text style={styles.detailText}>{complexity?.toUpperCase()}</Text>
              <Text style={styles.detailText}>
                {affordability?.toUpperCase()}
              </Text>
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    marginTop: 35,
    margin: 20,
    borderRadius: 8,
    backgroundColor: "#8f6d6d",
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    borderRadius: 8,
    margin: 14,
    marginRight: 14,
    width: "95%",
    height: 250,
  },
  titleContainer: {
    padding: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
    color: "#000000",
  },
  detailsTitle: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 4,
    marginHorizontal: 20,
  },
  detailText: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 10,
    marginHorizontal: 8,
  },
  detailsContainer: {
    justifyContent: "center",
    marginHorizontal: 20,
    flexDirection: "row",
  },
  ButtonPressed: {
    backgroundColor: "#40400045",
  },
});
