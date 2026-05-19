import type { RootStackParamList } from "@/app/navigation/types";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./style";
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
          pressed ? styles.mealItemButtonPressed : null;
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
