import AsyncStorage from "@react-native-async-storage/async-storage";
import { FopagProps } from "../shared/types/FopagProps";
import { FOPAG_COLLECTION } from "./storageConfig";

async function genericCreate(genericStorageProps: FopagProps) {
  try {
    const previous = Array.from(await genericList());
    previous.push(genericStorageProps);
    await AsyncStorage.setItem(FOPAG_COLLECTION, JSON.stringify(previous));
    console.debug("Insert operation successful");
  } catch (err) {
    console.error(
      `Error while trying to insert value in generic collection: ${err}`
    );
  }
}

async function genericList(): Promise<FopagProps[]> {
  const storage: string | null = await AsyncStorage.getItem(
    FOPAG_COLLECTION,
    (err) => {
      if (err) {
        throw `Error while trying to get value generic collections: ${err}`;
      }
    }
  );

  return storage ? JSON.parse(storage) : [];
}

async function genericMergeItem(genericStorageProps: FopagProps) {
  await AsyncStorage.mergeItem(
    FOPAG_COLLECTION,
    JSON.stringify(genericStorageProps),
    (err) => {
      if (err) {
        console.error(`Merge operation failed: ${err}`);
      } else {
        console.debug("Merge operation successful");
      }
    }
  );
}

async function genericRemove() {
  await AsyncStorage.removeItem(FOPAG_COLLECTION, (err) => {
    if (err) {
      console.error(`Remove operation failed: ${err}`);
    } else {
      console.debug("Remove operation successful");
    }
  });
}

async function genericClear() {
  await AsyncStorage.clear();
}

export const asyncStorage = {
  genericCreate,
  genericList,
  genericMergeItem,
  genericRemove,
  genericClear,
};
