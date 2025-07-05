import AsyncStorage from '@react-native-async-storage/async-storage';
import { EventProps } from '../shared/types/EventProps';
import { EVENTS_COLLECTION } from './storageConfig';

async function genericPush(genericStorageProps: EventProps) {
  try {
    const previous = Array.from(await genericList());
    previous.push(genericStorageProps);
    await AsyncStorage.setItem(EVENTS_COLLECTION, JSON.stringify(previous));
    console.debug('Insert operation successful');
  } catch (err) {
    console.error(
      `Error while trying to insert value in generic collection: ${err}`
    );
  }
}

async function genericArrayCreate(genericStorageProps: EventProps[]) {
  try {
    await AsyncStorage.setItem(
      EVENTS_COLLECTION,
      JSON.stringify(genericStorageProps)
    );
    console.debug('Insert operation successful');
  } catch (err) {
    console.error(
      `Error while trying to insert value in generic collection: ${err}`
    );
  }
}

async function genericList(): Promise<EventProps[]> {
  const storage: string | null = await AsyncStorage.getItem(
    EVENTS_COLLECTION,
    (err) => {
      if (err) {
        throw `Error while trying to get value generic collections: ${err}`;
      }
    }
  );

  return storage ? (JSON.parse(storage) as EventProps[]) : [];
}

async function genericListCount(): Promise<number> {
  const storage: string | null = await AsyncStorage.getItem(
    EVENTS_COLLECTION,
    (err) => {
      if (err) {
        throw `Error while trying to get value generic collections: ${err}`;
      }
    }
  );

  return storage ? (JSON.parse(storage) as EventProps[]).length : 0;
}

async function genericMergeItem(genericStorageProps: EventProps) {
  await AsyncStorage.mergeItem(
    EVENTS_COLLECTION,
    JSON.stringify(genericStorageProps),
    (err) => {
      if (err) {
        console.error(`Merge operation failed: ${err}`);
      } else {
        console.debug('Merge operation successful');
      }
    }
  );
}

async function genericRemove() {
  await AsyncStorage.removeItem(EVENTS_COLLECTION, (err) => {
    if (err) {
      console.error(`Remove operation failed: ${err}`);
    } else {
      console.debug('Remove operation successful');
    }
  });
}

async function genericClear() {
  await AsyncStorage.clear();
}

export const asyncStorage = {
  genericPush,
  genericArrayCreate,
  genericList,
  genericListCount,
  genericMergeItem,
  genericRemove,
  genericClear,
};
