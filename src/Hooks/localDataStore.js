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
  image: [],
  fields: true,
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
  yourimage: () => {},
  yourfields: () => {},
});

export const LocalDataStoreProvider = localDataStore.Provider;

export default function useLocalDataStore() {
  return useContext(localDataStore);
}
