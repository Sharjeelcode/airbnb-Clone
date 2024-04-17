import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { database } from "../Firebase/config";
import useFireStoreData from "../Hooks/fireStoreData";

function Landingpage() {
  const { pushadsData, adsData } = useFireStoreData();

  const func = async () => {
    try {
      const querySnapshot = await getDocs(collection(database, "Ads"));
      querySnapshot.forEach((doc) => {
        let data = doc.data();
        pushadsData(data);
        // console.log(doc.id, doc.data());
        console.log(adsData);
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    func();
  }, []);
  console.log(adsData);
  return (
    <div>
      <button onClick={func}>getdata</button>
    </div>
  );
}

export default Landingpage;
