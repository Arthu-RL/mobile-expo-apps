import { useState } from "react";
import {
  Text,
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { styles } from "./styles";
import { useFopagContext } from "../../hook/useFopag";
import { FopagProps } from "../../shared/types/FopagProps";

export function SearchSpends() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<FopagProps[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const { dlist } = useFopagContext();

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      setSearchResults([]);
      setHasSearched(true);
      return;
    }
    const filteredResults = dlist.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.sector.toLowerCase().includes(searchTerm.toLowerCase())
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
            Nenhum funcionário encontrado com este termo.
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
              <View style={styles.itemHeader}>
                <Text style={styles.itemDescription}>{item.name}</Text>
              </View>

              <View style={styles.cardContentWrapper}>
                <View style={styles.detailsContainer}>
                  <Text style={styles.itemDetail}>CPF: {item.cpf}</Text>
                  <Text style={styles.itemDetail}>
                    Setor: {item.sector || "N/A"}
                  </Text>
                  <Text style={styles.itemDetail}>
                    Função: {item.functionRole || "N/A"}
                  </Text>
                </View>

                <View style={styles.cardSalary}>
                  {item.salary.split(" ").map((value, index) => {
                    switch (index) {
                      case 0:
                        return (
                          <Text
                            key={`salary-${index}`}
                            style={styles.valueText}
                          >
                            Líquido: R$ {parseFloat(value)}
                          </Text>
                        );
                      case 1:
                        return (
                          <Text
                            key={`salary-${index}`}
                            style={styles.valueText}
                          >
                            INSS: R$ {parseFloat(value)}
                          </Text>
                        );
                      case 2:
                        return (
                          <Text
                            key={`salary-${index}`}
                            style={styles.valueText}
                          >
                            IRRF: R$ {parseFloat(value)}
                          </Text>
                        );
                      default:
                        return null;
                    }
                  })}
                </View>
              </View>
            </View>
          )}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </ScrollView>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Pesquisa de Funcionários</Text>
      <View style={styles.searchSection}>
        <Text style={styles.sectionTitle}>Filtros de pesquisa</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Nome ou setor</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: Setor1..."
            value={searchTerm}
            onChangeText={setSearchTerm}
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={handleSearch}>
          <Text style={styles.headingText}>Pesquisar</Text>
        </TouchableOpacity>
      </View>
      {renderSearchResults()}
    </View>
  );
}
