import { useState } from "react";
import { ScrollView, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";
import { asyncStorage } from "../../storage/SpendStorage";
import { SpendProps } from "../../shared/types/SpendProps";
import { useSpendsContext } from "../../hook/useSpends";
import { styles } from "./styles";

export function Dashboard() {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [place, setPlace] = useState("");
  const { setDlist } = useSpendsContext();

  async function handleAddNewSpend(data: SpendProps) {
    await asyncStorage.spendCreate(data);
    const result = await asyncStorage.spendList();
    setDlist(result);

    setDescription("");
    setValue("");
    setDate("");
    setCategory("");
    setPlace("");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Controle de Gastos</Text>

      <ScrollView 
        contentContainerStyle={styles.scrollViewContent} 
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.formContainer}>
          <View style={styles.fieldGroup}>
            <Text style={styles.sectionTitle}>Informações da Despesa</Text>
            
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Descrição</Text>
              <TextInput
                placeholder="Ex: Compras supermercado"
                value={description}
                onChangeText={(text: string) => setDescription(text)}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Valor</Text>
              <TextInput
                placeholder="Ex: 85,50"
                keyboardType="numeric"
                value={value}
                onChangeText={(text: string) => setValue(text)}
              />
            </View>
          </View>

          <View style={styles.fieldGroup}>
            <Text style={styles.sectionTitle}>Detalhes</Text>
            
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Data</Text>
              <TextInput
                placeholder="Ex: 19/03/2025"
                value={date}
                onChangeText={(text: string) => setDate(text)}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Categoria</Text>
              <TextInput
                placeholder="Ex: Alimentação"
                value={category}
                onChangeText={(text: string) => setCategory(text)}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Local</Text>
              <TextInput
                placeholder="Ex: Supermercado ABC"
                value={place}
                onChangeText={(text: string) => setPlace(text)}
              />
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={async () =>
            await handleAddNewSpend({
              description,
              value,
              date,
              category,
              place
            })
          }
        ><Text style={styles.headingText}>Adicionar Despesa</Text></TouchableOpacity>
      </View>
    </View>
  );
}