import { useState } from "react";
import { Text, View, FlatList, Touchable, ScrollView, TouchableOpacity, TextInput } from "react-native";
import { styles } from "./styles";
import { useSpendsContext } from "../../hook/useSpends";
import { SpendProps } from "../../shared/types/SpendProps";

export function SearchSpends() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<SpendProps[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const { dlist } = useSpendsContext();

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      setSearchResults([]);
      setHasSearched(true);
      return;
    }

    const filteredResults = dlist.filter(
      (item) => 
        item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    setSearchResults(filteredResults);
    setHasSearched(true);
  };

  const renderSearchResults = () => {
    if (!hasSearched) return null;

    if (searchResults.length === 0) {
      return (
        <View style={styles.resultContainer}>
          <Text style={styles.noResultText}>
            Nenhuma despesa encontrada com este termo.
          </Text>
        </View>
      );
    }

    return (
      <ScrollView style={styles.resultContainer}>
        <Text style={styles.resultTitle}>Resultados da pesquisa</Text>
        <FlatList
          scrollEnabled={false}
          data={searchResults}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.searchResultItem}>
              <Text style={styles.itemDescription}>{item.description}</Text>
              <Text style={styles.itemValue}>R$ {item.value}</Text>
              <Text style={styles.itemDetail}>
                {item.category} • {item.date}
              </Text>
            </View>
          )}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </ScrollView>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Pesquisa de Gastos</Text>

      <View style={styles.searchSection}>
        <Text style={styles.sectionTitle}>Filtros de pesquisa</Text>
        
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Categoria ou descrição</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: Mercado..."
            value={searchTerm}
            onChangeText={setSearchTerm}
          />
        </View>

        <TouchableOpacity
          style={styles.searchBtn}
          onPress={handleSearch}
        ><Text style={styles.headingText}>Pesquisar</Text></TouchableOpacity>
      </View>
      
      {renderSearchResults()}
    </View>
  );
}