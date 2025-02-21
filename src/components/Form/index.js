import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import ResponseIMC from "./ResponseIMC";
import styles from "./style";

export default function Form() {
  const [weigth, setWeigth] = useState(null);
  const [heigth, setHeight] = useState(null);

  const [imcMessage, setImcMessage] = useState(
    "Preencha os campos: Peso e Altura!"
  );
  const [imcStatus, setImcStatus] = useState(null);

  const [textButton, setTextButton] = useState("Calcular");

  function imcReponse() {
    return setImcStatus((weigth / (heigth * heigth)).toFixed(2));
  }

  function imcValidation() {
    if (weigth != null && heigth != null) {
      imcReponse();
      setHeight(null);
      setWeigth(null);
      setImcMessage("Seu IMC é: ");
      setTextButton("Calcular Novamente");
      return;
    }
    setImcStatus(null);
    setTextButton("Calcular");
    setImcMessage("Preencha os campos: Peso e Altura");
  }

  return (
    <View style={styles.formContext}>
      <View style={styles.forms}>
        <Text style={styles.textLabel}>Peso</Text>
        <TextInput
          placeholder="Ex. 76.25"
          keyboardType="numeric"
          onChangeText={setWeigth}
          value={weigth}
          style={styles.textInput}
        />
        <Text style={styles.textLabel}>Altura</Text>
        <TextInput
          placeholder="Ex. 1.75"
          keyboardType="numeric"
          onChangeText={setHeight}
          value={heigth}
          style={styles.textInput}
        />
        <TouchableOpacity
          style={styles.buttonValidation}
          onPress={() => {
            imcValidation();
          }}
        >
          <Text style={styles.textButton}>{textButton}</Text>
        </TouchableOpacity>
      </View>

      <ResponseIMC messageResponseImc={imcMessage} responseImc={imcStatus} />
    </View>
  );
}
