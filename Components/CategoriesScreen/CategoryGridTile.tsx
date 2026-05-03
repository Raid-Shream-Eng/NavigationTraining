import React from "react";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

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
          styles.ButtonStyle,
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

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    height: 150,
    borderRadius: 8,
    margin: 16,
    elevation: 4,
    borderWidth: 1,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    alignItems: "center",
    justifyContent: "center",
  },
  ButtonStyle: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  ButtonPressed: {
    opacity: 0.3,
  },
  interContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "Aptos",
    fontSize: 16,
    fontWeight: "700",
  },
});
