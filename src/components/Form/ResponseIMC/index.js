import { View, Text } from "react-native";

export default function ResponseIMC(props) {
  return (
    <View>
      <Text> {props.messageResponseImc} </Text>
      <Text> {props.responseImc} </Text>
    </View>
  );
}
