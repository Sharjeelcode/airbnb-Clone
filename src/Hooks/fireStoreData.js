import { createContext, useContext } from "react";

export const fireStoreData = createContext({
  adsData: [],
  pushadsData: () => {},
  adsDetail: 0,
  pushadsDetail: () => {},
  FireStoreDataFetch: () => {},
});

export const FireStoreDataProvider = fireStoreData.Provider;

export default function useFireStoreData() {
  return useContext(fireStoreData);
}
