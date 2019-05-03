import { StyleSheet } from "react-native";
const AddMenuStyle = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "column",
    marginTop: 100
  },
  rowContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  text: {
    flex: 1
  },
  textInput: {
    flex: 1,
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1
  },
  textInputArea: {
    flex: 1,
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
    height: 140
  },
  buttonContainer: {
    flex: 1,
    alignSelf: "center",
    width: 250,
    marginTop: 100
  }
});

export default AddMenuStyle;
