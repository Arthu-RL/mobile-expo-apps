import { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';
import {
  Text,
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { styles } from './styles';
import { useEventContext } from '../../hooks/useEvents';
import { EventProps } from '../../shared/types/EventProps';
import { ItemView } from '../../components/ItemView';

export function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<EventProps[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const { dlist, refreshDList, removeItem } = useEventContext();

  useFocusEffect(
    useCallback(() => {
      refreshDList();
    }, [])
  );

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      setSearchResults([]);
      setHasSearched(true);
      return;
    }

    const filteredResults = dlist.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.place.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(filteredResults);
    setHasSearched(true);
  };

  useFocusEffect(
    useCallback(() => {
      setSearchTerm('');
      handleSearch();
    }, [])
  );

  const renderSearchResults = () => {
    if (!hasSearched) return null;

    if (searchResults.length === 0) {
      return (
        <View style={styles.resultContainer}>
          <Text style={styles.noResultText}>Nenhum evento encontrado.</Text>
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
            <ItemView item={item} removeItemCallback={removeItem} />
          )}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </ScrollView>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.headingText}>Pesquisa de Eventos</Text>
      </View>

      <View style={styles.searchSection}>
        <Text style={styles.sectionTitle}>Filtros de pesquisa</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>
            Nome, Local, ou, cidade do Evento
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: Aniversário..."
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
