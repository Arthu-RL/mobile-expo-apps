import { Text, FlatList, View } from "react-native";
import { useFopagContext } from "../../hook/useFopag";
import { useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import { styles } from "./styles";
import { salaryUtils } from "../../utils/salary";

export function ListSpends() {
  const { dlist, refreshDList } = useFopagContext();

  const renderEmptyList = () => (
    <View style={styles.emptyList}>
      <Text style={styles.emptyListText}>
        Nenhum funcionário cadastrado ainda.
      </Text>
    </View>
  );

  useEffect(() => {
    console.debug("List updated:", dlist);
  }, [dlist]);

  useFocusEffect(
    useCallback(() => {
      console.log("Screen is focused, updating employee list");

      refreshDList();
    }, [])
  );

  const validItems = dlist
    ? dlist.filter((item) => item && item.name && item.salary)
    : [];

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.headingText}>Listagem de Funcionários</Text>
      </View>

      <FlatList
        data={validItems}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={renderEmptyList}
        renderItem={({ item }) => {
          const bruteSalary = parseFloat(item.salary.replace(",", "."));
          const inss = bruteSalary * salaryUtils.calcInnsDiscount(bruteSalary);
          const irs = salaryUtils.calcIrsDiscount(bruteSalary);
          const liquid = bruteSalary - inss - irs;

          return (
            <View style={styles.spendCard}>
              <View style={styles.cardHeader}>
                <Text style={styles.descriptionText}>{item.name}</Text>
              </View>

              <View style={styles.cardContentWrapper}>
                <View style={styles.detailsContainer}>
                  <View style={styles.detailRow}>
                    <Text style={styles.detailLabel}>CPF:</Text>
                    <Text style={styles.detailText}>{item.cpf}</Text>
                  </View>
                  <View style={styles.detailRow}>
                    <Text style={styles.detailLabel}>Setor:</Text>
                    <Text style={styles.detailText}>
                      {item.sector || "N/A"}
                    </Text>
                  </View>
                  <View style={styles.detailRow}>
                    <Text style={styles.detailLabel}>Função:</Text>
                    <Text style={styles.detailText}>
                      {item.functionRole || "N/A"}
                    </Text>
                  </View>
                </View>

                <View style={styles.cardSalary}>
                  <Text style={styles.valueText}>
                    Salário: R$ {bruteSalary}
                  </Text>
                  <Text style={styles.valueText}>Líquido: R$ {liquid}</Text>
                  <Text style={styles.valueText}>INSS: R$ {inss}</Text>
                  <Text style={styles.valueText}>IRS: R$ {irs}</Text>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}
