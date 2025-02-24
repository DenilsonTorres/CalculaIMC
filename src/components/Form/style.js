import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  formContext: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 30,
    borderTopRifhtRadius: 30,
    marginTop: 30,
    alignItems: "center",
  },

  forms: {
    marginTop: 40,
    width: "100%",
    height: "auto",
  },

  label: {
    color: "#2C3E50",
    fontSize: 25,
    fontWeight: "800",
    textAlign: "left",
    paddingLeft: 20,
  },

  textInput: {
    width: "90%",
    height: 60,
    backgroundColor: "#B9C3CC",
    color: "#2C3E50",
    fontSize: 16,
    borderRadius: 15,
    padding: 15,
    marginTop: 15,
    marginBottom: 10,
    alignSelf: "center",
    borderWidth: 1,
  },

  buttonValidation: {
    width: "90%",
    height: 60,
    alignItems: "center",
    backgroundColor: "#F39C12",
    justifyContent: "center",
    borderRadius: 15,
    marginTop: 40,
    marginBottom: 20,
    borderWidth: 1,
    alignSelf: "center",
  },

  textButton: {
    fontSize: 25,
    color: "#2C3E50",
    fontWeight: "800",
    borderColor: "#2C3E50",
  },
});

export default styles;
