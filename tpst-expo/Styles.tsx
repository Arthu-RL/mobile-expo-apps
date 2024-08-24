import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    backgroundColor: 'gray',
    borderWidth: 5,
    borderColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});