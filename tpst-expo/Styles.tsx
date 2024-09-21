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
});

const trab = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    paddingRight: 90,
    paddingLeft: 90,
  },
  input: {
    flex: 1,
    backgroundColor: '#4d4d4d',
    color: '#fff',
    padding: 10,
    borderRadius: 8,
    marginRight: 3,
  },
  button: {
    backgroundColor: '#6959cd',
    padding: 12,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginTop: 40,
  },
  icon: {
    marginRight: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  partTo: {
    color: '#6959cd',
  },
  partDo: {
    color: '#3f68e1',
  },
  taskInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 40,
    marginRight: 40,
  },
  textWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    width: '100%'
  },
  created: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3f68e1',
    marginRight: 5,
  },
  concluded: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6959cd',
    marginRight: 5,
  },
  number: {
    fontSize: 24,
    fontWeight: 'normal',
    color: '#000',
  },
  allTaskContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 50,
    paddingRight: 50,
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#17202a',
    marginTop: 5,
    marginBottom: 5,
    padding: 10,
    borderRadius: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    // width: '90%',
  },
  textAndDeleteContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  checkbox: {
    paddingRight: 10,
  },
  taskText: {
    fontSize: 18,
    color: '#fff',
    flexShrink: 1, 
    marginLeft: 5,
    marginRight: 5,
  },
  completedTask: {
    textDecorationLine: 'line-through',
    fontSize: 18,
    color: '#808080',
    flexShrink: 1,
    marginLeft: 5,
    marginRight: 5,
  },
  taskList: {
    width: '100%',
  }, 
});

export const styles = {global, item, error, trab};