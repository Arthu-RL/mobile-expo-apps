import { Text, FlatList, View } from "react-native";
import { useSpendsContext } from "../../hook/useSpends";
import { useEffect } from "react";
import { styles } from "./styles";

export function ListSpends() {
  const { dlist } = useSpendsContext();

  useEffect(() => {
    console.log("Spends list updated:", dlist);
  }, [dlist]);

  const renderEmptyList = () => (
    <View style={styles.emptyList}>
      <Text style={styles.emptyListText}>
        Nenhuma despesa cadastrada ainda.
      </Text>
    </View>
  );

  const validItems = dlist ? dlist.filter(item => 
    item && item.description && item.value) : [];

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.headingText}>Listagem de Gastos</Text>
      </View>
      
      <FlatList
        data={validItems}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={renderEmptyList}
        renderItem={({ item }) => (
          <View style={styles.spendCard}>
            <View style={styles.cardHeader}>
              <Text style={styles.descriptionText}>{item.description}</Text>
              <Text style={styles.valueText}>R$ {item.value}</Text>
            </View>

            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Data:</Text>
              <Text style={styles.detailText}>{item.date || "N/A"}</Text>
            </View>

            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Categoria:</Text>
              <Text style={styles.detailText}>{item.category || "N/A"}</Text>
            </View>

            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Local:</Text>
              <Text style={styles.detailText}>{item.place || "N/A"}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}