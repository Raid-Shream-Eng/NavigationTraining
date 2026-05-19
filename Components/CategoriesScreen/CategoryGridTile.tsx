import React from "react";
import { Pressable, Text, View } from "react-native";
import { styles } from "./style";
type CategoryGridTypes = {
  title: string;
  color: string;
  onPress: () => void;
};

const CategoryGridTile = ({ title, color, onPress }: CategoryGridTypes) => {
  return (
    <View style={[styles.gridItem, { backgroundColor: color }]}>
      <Pressable
        style={({ pressed }) => [
          styles.mealItemButtonStyle,
          pressed ? styles.ButtonPressed : null,
        ]}
        onPress={onPress}
      >
        <View style={styles.interContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;
