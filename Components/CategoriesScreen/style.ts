import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
  mealItemButtonStyle: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  mealItemButtonPressed: {
    opacity: 0.3,
  },
  interContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  mealItemtitle: {
    fontFamily: "Aptos",
    fontSize: 16,
    fontWeight: "700",
  },
});
