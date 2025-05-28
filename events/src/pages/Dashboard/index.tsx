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
import { EventProps, eventSchema } from "../../shared/types/EventProps";
import { styles } from "./styles";

const enum PropsEnum {
  PLACE = 0,
  NAME = 1,
  CITY = 2,
  ESTATE = 3,
  DATE = 4,
  VALUE = 5,
}

type G<T> = T extends any ? T : never;

export function Dashboard() {
  const [globalState, setGlobalState] = useState<G<any>[]>([]);

  function dataValidation(data: EventProps): EventProps | null {
    const event = eventSchema.safeParse(data);

    if (!event.success) {
      const firstError = event.error.errors[0];
      alert(firstError.message);
      return null;
    }

    // console.debug(event.data);

    return event.data;
  }

  // useEffect(() => {
  //   asyncStorage.genericClear();
  // });

  async function handleAddNewSpend(data: EventProps) {
    const validatedEvent = dataValidation(data);
    if (validatedEvent != null) {
      await asyncStorage.genericPush(validatedEvent);

      setGlobalState([]);

      // refreshDList()
    }
  }

  async function handlePress() {
    const id = await asyncStorage.genericListCount();

    const newEvent: EventProps = {
      id,
      place: globalState[PropsEnum.PLACE] || "",
      name: globalState[PropsEnum.NAME] || "",
      city: globalState[PropsEnum.CITY] || "",
      estate: globalState[PropsEnum.ESTATE] || "",
      date: globalState[PropsEnum.DATE] || "",
      value: globalState[PropsEnum.VALUE] || "",
    };

    await handleAddNewSpend(newEvent);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Controle de Eventos</Text>

      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.formContainer}>
          <View style={styles.fieldGroup}>
            <Text style={styles.sectionTitle}>Informações sobre o Evento</Text>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Local do Evento</Text>
              <TextInput
                placeholder="Ex: Taverna"
                keyboardType="default"
                value={globalState[PropsEnum.PLACE]}
                onChangeText={(text) => {
                  setGlobalState((prev) => {
                    const newState = [...prev];
                    newState[PropsEnum.PLACE] = text;
                    return newState;
                  });
                }}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Nome do Evento</Text>
              <TextInput
                placeholder="Ex: Aniversário"
                keyboardType="default"
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
              <Text style={styles.inputLabel}>Cidade do Evento</Text>
              <TextInput
                placeholder="Ex: Valença"
                keyboardType="default"
                value={globalState[PropsEnum.CITY]}
                onChangeText={(text) => {
                  setGlobalState((prev) => {
                    const newState = [...prev];
                    newState[PropsEnum.CITY] = text;
                    return newState;
                  });
                }}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Estado do Evento</Text>
              <TextInput
                placeholder="Ex: RJ"
                keyboardType="default"
                value={globalState[PropsEnum.ESTATE]}
                onChangeText={(text) => {
                  setGlobalState((prev) => {
                    const newState = [...prev];
                    newState[PropsEnum.ESTATE] = text;
                    return newState;
                  });
                }}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Data do Evento</Text>
              <TextInput
                placeholder="Ex: 26/04/2025"
                keyboardType="default"
                value={globalState[PropsEnum.DATE]}
                onChangeText={(text) => {
                  setGlobalState((prev) => {
                    const newState = [...prev];
                    newState[PropsEnum.DATE] = text;
                    return newState;
                  });
                }}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Valor do Evento</Text>
              <TextInput
                placeholder="Ex: 350.00"
                keyboardType="numeric"
                value={globalState[PropsEnum.VALUE]}
                onChangeText={(text) => {
                  setGlobalState((prev) => {
                    const newState = [...prev];
                    newState[PropsEnum.VALUE] = text;
                    return newState;
                  });
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handlePress}>
          <Text style={styles.headingText}>Adicionar Evento</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
