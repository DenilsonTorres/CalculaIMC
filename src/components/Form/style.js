import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  formContext: {
    alignItems: "center",
    width: "100%",
    height: "100%",
    bottom: 0,
    borderTopLeftRadius: 30,
    borderTopRifhtRadius: 30,
    marginTop: 30,
  },
  forms: {
    marginTop: 40,
    width: "100%",
    height: "auto",
    alignItems: "center",
  },
  textLabel: {
    color: "#2C3E50",
    fontSize: 25,
    fontWeight: "800",
    
  },
  textInput: {
    width: "90%",
    height: 50,
    backgroundColor: "#1ABC9C",
    color: "#2C3E50",
    fontSize: 16,
    borderRadius: 15,
    padding: 15,
    marginTop: 10,
    marginBottom: 10,

  },

  buttonValidation: {
    width: "90%",
    height: 50,
    alignItems: "center",
    backgroundColor: "#1ABC9C",
    justifyContent: "center",
    borderRadius: 15,
    marginTop: 40,
    marginBottom: 20,
    borderWidth: 1,
  },

  textButton: {
    fontSize: 25,
    color: "#2C3E50",
    fontWeight: "800",
    borderColor: "#2C3E50",

  },
});

export default styles;
