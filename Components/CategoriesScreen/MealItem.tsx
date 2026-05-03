import { Text, View } from "react-native";
type MealItemProps = {
  title: string;
};

function MealItem({ title }: MealItemProps) {
  return (
    <View style={{ flex: 1 }}>
      <Text>{title}</Text>
    </View>
  );
}

export default MealItem;
