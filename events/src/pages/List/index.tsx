import { Text, FlatList, View } from "react-native";
import { useEventContext } from "../../hooks/useEvents";
import { useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import { styles } from "./styles";
import { ItemView } from "../../components/ItemView";

export function List() {
  const { dlist, refreshDList, removeItem } = useEventContext();

  const renderEmptyList = () => (
    <View style={styles.emptyList}>
      <Text style={styles.emptyListText}>Nenhum evento cadastrado ainda.</Text>
    </View>
  );

  useEffect(() => {
    console.debug("List updated:", dlist);
  }, [dlist]);

  useFocusEffect(
    useCallback(() => {
      refreshDList();
    }, [])
  );

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.headingText}>Listagem de Eventos</Text>
      </View>

      <FlatList
        data={dlist}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={renderEmptyList}
        renderItem={({ item }) => (
          <ItemView item={item} removeItemCallback={removeItem} />
        )}
      />
    </View>
  );
}
