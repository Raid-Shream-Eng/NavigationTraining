import MealItem from "@/Components/CategoriesScreen/MealItem";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useLayoutEffect } from "react";
import { FlatList, ListRenderItemInfo, View } from "react-native";
import { CATEGORIES, MEALS } from "../Data/dummy-data";
import type { RootStackParamList } from "../navigation/types";
type MealsViewScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "MealsView"
>;
type Meal = (typeof MEALS)[number];
const Stack = createNativeStackNavigator();

function MealsViewScreen({ route, navigation }: MealsViewScreenProps) {
  const CatId = route.params.categoryId;
  const DisplayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(CatId) >= 0;
  });
  // Set the header title based on the category title before the component is rendered with useLayoutEffect
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === CatId,
    )?.title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [CatId, navigation]);

  function rendermealItem({ item }: ListRenderItemInfo<Meal>) {
    return (
      <MealItem
        id={item.id}
        title={item.title}
        imageUrl={item.imageUrl}
        affordability={item.affordability}
        complexity={item.complexity}
        duration={item.duration}
        onPress={() => {
          navigation.navigate("MealDetails", {
            mealId: item.id,
          });
        }}
      />
    );
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

export default MealsViewScreen;
