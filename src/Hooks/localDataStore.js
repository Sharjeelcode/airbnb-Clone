import { createContext, useContext } from "react";

export const localDataStore = createContext({
    currentUser : "",
    host : "",
    location : "",
    placeName : "",
    aboutPlace : "",
    placeView : "",
    price : "",
    guest : "",
    bedroom : "",
    bed : "", 
    bathrom : "",
    image : [],
    yourhost : ()=>{},
    yourlocation :()=>{},
    yourplaceName :()=>{},
    youraboutPlace :()=>{},
    yourplaceView :()=>{},
    yourprice :()=>{},
    yourguest :()=>{},
    yourbedroom :()=>{},
    yourbed :()=>{},
    yourbathrom :()=>{},
    yourimage :()=>{},
}) 

export const LocalDataStoreProvider = localDataStore.Provider

export default function useLocalDataStore() {
    return useContext(localDataStore)
}