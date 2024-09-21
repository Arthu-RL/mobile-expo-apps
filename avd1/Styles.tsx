import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  root: {
    width: "100%",
    height: "100%",
    backgroundColor: "#969CB2",
    alignItems: "center",
  },
  nav: {
    width: "100%",
    height: 120,
    backgroundColor: "#5636D3",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 24,
  },
  input: {
    width: "93%",
    height: 56,
    backgroundColor: "#FFFFFF",
    color: "#363F5F",
    fontWeight: "bold",
    padding: 16,
    fontSize: 16,
    marginBottom: 40,
  },
  button: {
    position: "relative",
    width: "95%",
    height: 60,
    backgroundColor: "#FF872C",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: "22%",
  },
  textButton: {
    color: "#FFFFFF",
    fontSize: 24,
  },
});
