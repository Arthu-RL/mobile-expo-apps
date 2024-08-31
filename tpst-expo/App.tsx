import { StatusBar } from 'expo-status-bar';
import { Text, Button, View, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { styles } from './Styles';

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

  return (
    <View style={styles.global.root}>
      <Text>Some Text</Text>
      <StatusBar style="auto" />
      <View style={styles.global.form}>
        <TextInput
          style={styles.global.input}
          placeholder='Pass something'
          placeholderTextColor='#6B6B6B'
          value={itemName}
          onChangeText={handleInputChange}
        />
        <TouchableOpacity
          style={styles.global.button}
          onPress={handleAddItem}
        >
          <Text style={styles.global.buttonText}>+</Text>
        </TouchableOpacity>
        {error && <Text style={styles.error.text}>{error}</Text>}
        <View style={styles.global.box}>
          {itens.map((content, index) => {
            return (
              <View key={index} style={styles.item.element}>
                <Text style={styles.item.text}>{content}</Text>
                <Button color="#000000" title='Delete' onPress={() => handleDeleteItem(index)} />
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
}
