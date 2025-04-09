import { useEffect, useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import { asyncStorage } from "../../storage/GenericStorage";
import { FopagProps } from "../../shared/types/FopagProps";
// import { useFopagContext } from "../../hook/useFopag";
import { styles } from "./styles";

const enum PropsEnum {
  CPF = 0,
  NAME = 1,
  ROLE = 2,
  SECTOR = 3,
  SALARY = 4,
}

type G<T> = T extends any ? T : never;

export function Dashboard() {
  const [globalState, setGlobalState] = useState<G<any>[]>([]);
  // const { refreshDList } = useFopagContext();

  function dataValidation(data: FopagProps): boolean {
    // Check (DDD.DDD.DDD-DD)
    // if (!data.cpf || !/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/.test(data.cpf)) {
    //   alert("Por favor, informe um CPF válido no formato DDD.DDD.DDD-DD.");
    //   return false;
    // }

    // if (!data.name || data.name.trim() === "") {
    //   alert("Por favor, informe o nome.");
    //   return false;
    // }

    // if (!data.functionRole || data.functionRole.trim() === "") {
    //   alert("Por favor, informe uma função.");
    //   return false;
    // }

    // if (!data.sector || data.sector.trim() === "") {
    //   alert("Por favor, informe um setor.");
    //   return false;
    // }

    if (!data.salary || isNaN(parseFloat(data.salary.replace(",", ".")))) {
      alert("Por favor, informe um valor válido.");
      return false;
    }

    if (parseFloat(data.salary.replace(",", ".")) <= 0) {
      alert("O valor deve ser maior que zero.");
      return false;
    }

    console.debug(data.salary);

    // All validations passed
    return true;
  }

  // useEffect(() => {
  //   asyncStorage.genericClear();
  // });

  async function handleAddNewSpend(data: FopagProps) {
    if (dataValidation(data)) {
      await asyncStorage.genericCreate(data);

      setGlobalState([]);

      // refreshDList()
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Controle de Funcionário</Text>

      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.formContainer}>
          <View style={styles.fieldGroup}>
            <Text style={styles.sectionTitle}>Informações do Funcionário</Text>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>CPF</Text>
              <TextInput
                placeholder="Ex: 123.456.789-00"
                value={globalState[PropsEnum.CPF]}
                onChangeText={(text) => {
                  setGlobalState((prev) => {
                    const newState = [...prev];
                    newState[PropsEnum.CPF] = text;
                    return newState;
                  });
                }}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Nome</Text>
              <TextInput
                placeholder="Ex: João"
                value={globalState[PropsEnum.NAME]}
                onChangeText={(text) => {
                  setGlobalState((prev) => {
                    const newState = [...prev];
                    newState[PropsEnum.NAME] = text;
                    return newState;
                  });
                }}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Função</Text>
              <TextInput
                placeholder="Ex: Desenvolvedor"
                value={globalState[PropsEnum.ROLE]}
                onChangeText={(text) => {
                  setGlobalState((prev) => {
                    const newState = [...prev];
                    newState[PropsEnum.ROLE] = text;
                    return newState;
                  });
                }}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Setor</Text>
              <TextInput
                placeholder="Ex: TI"
                value={globalState[PropsEnum.SECTOR]}
                onChangeText={(text) => {
                  setGlobalState((prev) => {
                    const newState = [...prev];
                    newState[PropsEnum.SECTOR] = text;
                    return newState;
                  });
                }}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Salário</Text>
              <TextInput
                placeholder="Ex: 5000,00"
                keyboardType="numeric"
                value={globalState[PropsEnum.SALARY]}
                onChangeText={(text) => {
                  setGlobalState((prev) => {
                    const newState = [...prev];
                    newState[PropsEnum.SALARY] = text;
                    return newState;
                  });
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={async () =>
            await handleAddNewSpend({
              cpf: globalState[PropsEnum.CPF] || "",
              name: globalState[PropsEnum.NAME] || "",
              functionRole: globalState[PropsEnum.ROLE] || "",
              sector: globalState[PropsEnum.SECTOR] || "",
              salary: globalState[PropsEnum.SALARY] || "",
            })
          }
        >
          <Text style={styles.headingText}>Adicionar Funcionário</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
