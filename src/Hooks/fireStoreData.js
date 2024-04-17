import { createContext, useContext } from "react";

export const fireStoreData = createContext({
  adsData: [],
  pushadsData: () => {},
});

export const FireStoreDataProvider = fireStoreData.Provider;

export default function useFireStoreData() {
  return useContext(fireStoreData);
}
