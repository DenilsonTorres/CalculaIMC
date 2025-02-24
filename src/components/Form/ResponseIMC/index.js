import { View, Text } from "react-native";
import styles from "./style";

export default function ResponseIMC(props) {
  return (
    <View style={styles.responseImc}>
      <Text style={styles.informationResult}> {props.messageResponseImc} </Text>
      <Text style={styles.numberResult}> {props.responseImc} </Text>
    </View>
  );
}
