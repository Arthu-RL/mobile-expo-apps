import AsyncStorage from "@react-native-async-storage/async-storage";
import { SpendProps } from "../shared/types/SpendProps";
import { SPEND_COLLECTION } from "./storageConfig";

async function spendCreate(spendStorageProps: SpendProps) {
  try {
    const previous = Array.from(await spendList());
    previous.push(spendStorageProps);
    await AsyncStorage.setItem(SPEND_COLLECTION, JSON.stringify(previous));
    console.debug("Insert operation successful");
  } catch (err) {
    console.error(
      `Error while trying to insert value in spend collection: ${err}`
    );
  }
}

async function spendList(): Promise<SpendProps[]> {
  const storage: string | null = await AsyncStorage.getItem(
    SPEND_COLLECTION,
    (err) => {
      if (err) {
        throw `Error while trying to get value spend collections: ${err}`;
      }
    }
  );

  return storage ? JSON.parse(storage) : [];
}

async function spendMergeItem(spendStorageProps: SpendProps) {
  await AsyncStorage.mergeItem(
    SPEND_COLLECTION,
    JSON.stringify(spendStorageProps),
    (err) => {
      if (err) {
        console.error(`Merge operation failed: ${err}`);
      } else {
        console.debug("Merge operation successful");
      }
    }
  );
}

async function spendRemove() {
  await AsyncStorage.removeItem(SPEND_COLLECTION, (err) => {
    if (err) {
      console.error(`Remove operation failed: ${err}`);
    } else {
      console.debug("Remove operation successful");
    }
  });
}

export const asyncStorage = {
  spendCreate,
  spendList,
  spendMergeItem,
  spendRemove,
};
