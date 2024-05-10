import { createContext, useContext } from "react";

export const fireStoreData = createContext({
  gallery: "",
  handleGallery: () => {},
  adsCatagroy: "",
  handleAdsCatagory: () => {},
});

export const FireStoreDataProvider = fireStoreData.Provider;

export default function useFireStoreData() {
  return useContext(fireStoreData);
}
