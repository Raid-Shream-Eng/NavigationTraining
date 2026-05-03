import MealItem from "@/Components/CategoriesScreen/MealItem";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { FlatList, ListRenderItemInfo, View } from "react-native";
import { MEALS } from "../Data/dummy-data";
import type { RootStackParamList } from "../navigation/types";
type MealDescriptionScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "MealDescription"
>;
type Meal = (typeof MEALS)[number];
const Stack = createNativeStackNavigator();

function MealDescriptionScreen({ route }: MealDescriptionScreenProps) {
  const CatId = route.params.categoryId;
  const DisplayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(CatId) >= 0;
  });
  function rendermealItem({ item }: ListRenderItemInfo<Meal>) {
    return <MealItem title={item.title} />;
  }
  return (
    <View>
      <FlatList
        data={DisplayMeals}
        keyExtractor={(item) => item.id}
        renderItem={rendermealItem}
      />
    </View>
  );
}

export default MealDescriptionScreen;
