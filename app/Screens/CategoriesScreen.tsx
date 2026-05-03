import CategoryGridTile from "@/Components/CategoriesScreen/CategoryGridTile";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FlatList, ListRenderItemInfo } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CATEGORIES } from "../Data/dummy-data";
import type { RootStackParamList } from "../navigation/types";

type Category = (typeof CATEGORIES)[number];
type CategoriesScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "MealsCategories"
>;

function CategoriesScreen({ navigation }: CategoriesScreenProps) {
  function renderCategoryItem({ item }: ListRenderItemInfo<Category>) {
    function presshandler() {
      navigation.navigate("MealDescription", {
        user: "Raid",
        categoryId: item.id,
      });
    }
    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        onPress={presshandler}
      />
    );
  }
  return (
    <SafeAreaView style={{ backgroundColor: "#300000" }}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </SafeAreaView>
  );
}

export default CategoriesScreen;
