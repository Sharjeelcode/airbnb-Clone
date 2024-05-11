import { createContext, useContext } from "react";

export const localDataStore = createContext({
  currentUser: "",
  host: "",
  location: "",
  placeName: "",
  price: "",
  aboutPlace: "",
  placeView: "",
  guest: 0,
  bedroom: 0,
  bed: 0,
  bathrom: 0,
  fields: true,
  city: "Karachi",
  imgFiles: [],
  yourhost: () => {},
  yourlocation: () => {},
  yourplaceName: () => {},
  youraboutPlace: () => {},
  yourplaceView: () => {},
  yourprice: () => {},
  yourguest: () => {},
  yourbedroom: () => {},
  yourbed: () => {},
  yourbathrom: () => {},
  yourfields: () => {},
  yourcity: () => {},
  handleImgFiles: () => {},
});

export const LocalDataStoreProvider = localDataStore.Provider;

export default function useLocalDataStore() {
  return useContext(localDataStore);
}
