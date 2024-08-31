import { Dimensions, StyleSheet } from 'react-native';

const global = StyleSheet.create({
  root: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',

    borderWidth: 5,
    borderColor: '#ffd433',
  },
  form: {
    margin: 5,
    padding: 10,

    justifyContent: 'center',
    alignItems: 'center',
    
    borderWidth: 5,
    borderColor: '#ffd433',
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    
    borderWidth: 5,
    borderColor: '#ffd433',
  },
  input: {
    margin: 10,
    height: 56,
    width: 200,
    backgroundColor: "#1F1E25",
    color: "#FFF",
    padding: 16,
    fontSize: 16,
    borderRadius: 5,

    borderWidth: 5,
    borderColor: '#ffd433',
  },
  button: {
    margin: 10,
    width: 200,
    height: 60,
    backgroundColor: '#8033ff',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',

    borderWidth: 5,
    borderColor: '#ffd433',
  },
  buttonText: {
    color: "#FFF",
    fontSize: 24
  },
});

const error = StyleSheet.create({
  text: { color: 'red', marginBottom: 10, marginTop: -5 },
});

const item = StyleSheet.create({
  element: {
    
  },
  box: {

  },
  text: {
    
  }
})

export const styles = {global, item, error};