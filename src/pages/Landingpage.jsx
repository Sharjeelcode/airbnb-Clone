import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { database } from "../Firebase/config";
import useFireStoreData, {
  FireStoreDataProvider,
} from "../Hooks/fireStoreData";
import AdsCard from "../components/AdsCard";
import CardsLoader from "../components/CardsLoader";

function Landingpage() {
  const { adsData, pushadsData } = useFireStoreData();
  const [loader, setloader] = useState(true);

  useEffect(() => {
    adsData.length > 0 ? setloader(false) : setloader(true);
  }, [adsData]);

  const func = async () => {
    try {
      const querySnapshot = await getDocs(collection(database, "Ads"));
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
      pushadsData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    func();
  }, []);

  return (
    <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center my-4">
      {adsData.map((ads, id) => {
        return (
          <>
            <AdsCard
              key={id}
              price={ads.price}
              location={ads.location}
              placeview={ads.placeView}
              image={ads.image}
              host={ads.host}
              city={ads.city}
              id={id}
            />
          </>
        );
      })}
      {loader && (
        <>
          <CardsLoader />
          <CardsLoader />
          <CardsLoader />
          <CardsLoader />
          <CardsLoader />
          <CardsLoader />
          <CardsLoader />
          <CardsLoader />
        </>
      )}
    </div>
  );
}

export default Landingpage;
