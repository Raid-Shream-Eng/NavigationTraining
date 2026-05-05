import React from "react";
import { Text, View } from "react-native";

import { MEALS } from "../Data/dummy-data";

function MealDetailScreen({ route }: any) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return (
    <View>
      <Text>MealDetailScreen for {mealId}</Text>
      {selectedMeal && (
        <View>
          <Text>{selectedMeal.title}</Text>
          <Text>{selectedMeal.ingredients}</Text>
        </View>
      )}
    </View>
  );
}

export default MealDetailScreen;
