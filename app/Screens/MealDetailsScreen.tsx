import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

import { MEALS } from "../Data/dummy-data";

function MealDetailScreen({ route }: any) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return (
    <View style={Styles.container}>
      <ScrollView>
        <Image source={{ uri: selectedMeal?.imageUrl }} style={Styles.image} />
        {selectedMeal && (
          <View style={Styles.resabeContainer}>
            <View style={Styles.titleContainer}>
              <Text style={Styles.title}>{selectedMeal.title}</Text>
            </View>
            <View style={Styles.ingredientsContainer}>
              <Text style={Styles.ingredients}>
                {selectedMeal.ingredients
                  .map((step: string, index: number) => ` ${step}`)
                  .join(", \n")}
              </Text>
            </View>
            <View style={Styles.stepsContainer}>
              <Text style={Styles.steps}>
                {selectedMeal.steps
                  .map(
                    (step: string, index: number) => `${index + 1}. ${step} `,
                  )
                  .join("\n")}
              </Text>
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

export default MealDetailScreen;

const Styles = StyleSheet.create({
  container: {
    margin: 20,
    backgroundColor: "#5a3a3a",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 22,
  },
  ingredients: {
    flexDirection: "column",
    fontSize: 16,
  },
  image: {
    margin: 30,
    padding: 16,
    width: "90%",
    height: 300,
    borderRadius: 8,
  },
  steps: {
    fontSize: 16,
  },
  resabeContainer: {
    padding: 16,
  },
  titleContainer: {
    marginBottom: 16,
  },
  ingredientsContainer: {
    margin: 12,
    borderBottomWidth: 2,
    paddingBottom: 12,
    borderBottomColor: "#000000",
  },
  stepsContainer: {
    marginBottom: 16,
  },
});
