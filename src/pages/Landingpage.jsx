import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import React, { useEffect, useId, useLayoutEffect, useState } from "react";
import { database } from "../Firebase/config";
import useFireStoreData, {
  FireStoreDataProvider,
} from "../Hooks/fireStoreData";
import AdsCard from "../components/AdsCard";
import CardsLoader from "../components/CardsLoader";

function Landingpage() {
  const [adsData, setadsData] = useState([]);
  const [loader, setloader] = useState(true);
  const [filterAds, setfilterAds] = useState(false);
  const { adsCatagroy } = useFireStoreData();

  useEffect(() => {
    adsData.length > 0 ? setloader(false) : setloader(true);
  }, [adsData]);

  const func = async () => {
    try {
      const querySnapshot = await getDocs(collection(database, "Ads"));
      const data = [];
      querySnapshot.forEach((doc) => {
        data.unshift({ ...doc.data(), id: doc.id });
      });
      setadsData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    func();
  }, []);

  useEffect(() => {
    adsCatagroy != "" ? setfilterAds(true) : setfilterAds(false);
  }, [adsCatagroy]);
  return (
    <>
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center my-4">
        {!filterAds &&
          adsData.map((ads) => {
            return (
              <>
                <AdsCard
                  key={ads.id}
                  price={ads.price}
                  location={ads.location}
                  placeview={ads.placeView}
                  image={ads.image}
                  host={ads.host}
                  city={ads.city}
                  id={ads.id}
                />
              </>
            );
          })}
        {filterAds &&
          adsData.map((ads) => {
            return ads.placeView === adsCatagroy ? (
              <>
                <AdsCard
                  key={ads.id}
                  price={ads.price}
                  location={ads.location}
                  placeview={ads.placeView}
                  image={ads.image}
                  host={ads.host}
                  city={ads.city}
                  id={ads.id}
                />
              </>
            ) : (
              ""
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
    </>
  );
}

export default Landingpage;
