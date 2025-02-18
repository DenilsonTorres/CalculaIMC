import { View, Text, TextInput, TouchableOpacity } from "react-native";

export default function Form() {
  return (
    <View>
      <View>
        <Text>Peso</Text>
        <TextInput
          placeholder="Ex. 76.25"
          keyboardType="numeric"
          value="Weight"
        />
        <Text>Altura</Text>
        <TextInput
          placeholder="Ex. 1.75"
          keyboardType="numeric"
          value="Height"
        />
        <TouchableOpacity>
          <Text>Calcular</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
