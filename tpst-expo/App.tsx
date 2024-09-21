import { StatusBar } from 'expo-status-bar';
import { Text, Button, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { useState } from 'react';
import { styles } from './Styles';
import { FontAwesome5, EvilIcons, MaterialIcons } from '@expo/vector-icons';

interface Task {
  id: number;
  text: string;
  completed: boolean;
};

export default function App() {
  const [itemName, setItemName] = useState('');
  const [itens, setItens] = useState<string[]>([]);
  const [error, setError] = useState('');

  function handleInputChange(text: string) {
    console.debug("text to set: ", text);
    setItemName(text);
  }

  function handleDeleteItem(index: number) {
    console.debug("Index to delete: ", index);
    setItens((prev) => prev.filter((_, i) => i !== index));
  }

  function handleAddItem() {
    if (!itemName.length) return;
    console.debug("Item to add: ", itemName);
    setItemName('');
    setItens((currentItens) => [...currentItens, itemName]);
  }

  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: 'Estudar para a prova da disciplina de Programação Mobile I - React Native - Professor Luiz Claudio', completed: false },
    { id: 2, text: 'Aula da disciplina de PM I', completed: false },
    { id: 3, text: 'Configurar o notebook para desenvolvimento', completed: false },
    { id: 4, text: 'Trabalho da disciplina de banco de dados', completed: true },
    { id: 5, text: 'Primeira avd da disciplina de POO I', completed: true },
  ]);
  const [newTask, setNewTask] = useState<string>('');

  function handleAddNewTask(text: string) {
      setNewTask(text);
  }

  function handleAddTask() {
    console.log(newTask)
    if (newTask.trim()) {
      setTasks(prevTasks => [
        ...prevTasks,
        {id: prevTasks.length + 1, text: newTask, completed: false}
      ]);
      setNewTask('');
    }
  }

  function toggleCompleteTask(id: number) {
    setTasks(prevTasks => prevTasks.map(task => 
      task.id === id ? {...task, completed: !task.completed} : task
    ));
  }

  function handleDeleteTask(id: number) {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  }

  function renderItem({ item }: {item: Task}) {
    return (
      <View style={styles.trab.taskContainer}>
        <TouchableOpacity onPress={() => toggleCompleteTask(item.id)}>
          <View style={styles.trab.checkbox}>
            {item.completed ? (
              <MaterialIcons name="check-circle" size={30} color="#005dff" />
            ) : (
              <MaterialIcons name="radio-button-unchecked" size={30} color="#005dff" />
            )}
          </View>
        </TouchableOpacity>
        <View style={styles.trab.textAndDeleteContainer}>
          <Text style={[styles.trab.taskText, item.completed && styles.trab.completedTask]}>
            {item.text}
          </Text>
          <TouchableOpacity onPress={() => handleDeleteTask(item.id)}>
            <MaterialIcons name="delete" size={30} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    // <View style={styles.global.root}>
    //   <Text>Arthur Rodrigues Lima</Text>
    //   {/* <StatusBar style="auto" />
    //   <View style={styles.global.form}>
    //     <TextInput
    //       style={styles.global.input}
    //       placeholder='Pass something'
    //       placeholderTextColor='#6B6B6B'
    //       value={itemName}
    //       onChangeText={handleInputChange}
    //     />
    //     <TouchableOpacity
    //       style={styles.global.button}
    //       onPress={handleAddItem}
    //     >
    //       <Text style={styles.global.buttonText}>+</Text>
    //     </TouchableOpacity>
    //     {error && <Text style={styles.error.text}>{error}</Text>}
    //     <View style={styles.global.box}>
    //       {itens.map((content, index) => {
    //         return (
    //           <View key={index} style={styles.item.element}>
    //             <Text style={styles.item.text}>{content}</Text>
    //             <Button color="#000000" title='Delete' onPress={() => handleDeleteItem(index)} />
    //           </View>
    //         );
    //       })}
    //     </View>
    //   </View> */}
    // </View>
  // <View style={styles.global.root}>
  //   <Text>Arthur Rodrigues Lima</Text>
  // </View>
  <View>
    <View style={styles.trab.header}>
      <FontAwesome5 name="tasks" size={32} color="#005dff" style={styles.trab.icon} />
      <Text style={styles.trab.title}>
        <Text style={styles.trab.partTo}>to</Text>
        <Text style={styles.trab.partDo}>do</Text>
      </Text>
    </View>

    <View style={styles.trab.container}>
      <TextInput
        placeholder="Adicione uma tarefa"
        placeholderTextColor="#fff"
        style={styles.trab.input}
        value={newTask}
        onChangeText={handleAddNewTask}
      />
      <TouchableOpacity style={styles.trab.button} onPress={handleAddTask}>
        <EvilIcons name="plus" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
    <View style={styles.trab.box}>
      <View style={styles.trab.textWrapper}>
        <View style={styles.trab.taskInfo}>
          <Text style={styles.trab.created}>Criadas</Text>
          <Text style={styles.trab.number}>{tasks.filter(task => !task.completed).length}</Text>
        </View>
        <View style={styles.trab.taskInfo}>
          <Text style={styles.trab.concluded}>Concluídas</Text>
          <Text style={styles.trab.number}>{tasks.filter(task => task.completed).length}</Text>
        </View>
      </View>
    </View>
    <View style={styles.trab.allTaskContainer}>
      <FlatList 
        data={tasks}
        renderItem={renderItem} 
        keyExtractor={item => item.id.toString()} 
        style={styles.trab.taskList}
      />
    </View>
  </View>
  );
}
