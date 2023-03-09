import React, { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css'; // import the leaflet css. Do we need to? TODO try remove
import userLocationPinIcon from '../assets/icons/pin.png';
import unisexIcon from '../assets/icons/unisex.png';
import manIcon from '../assets/icons/man.png';
import girlIcon from '../assets/icons/girl.png';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'; //MapContainer component needed to contain/wrap the map and specify initial center and zoom level. TileLayer is a component that renders a map layer consisting of a set of map tiles. Tiles are small images of maps that are combined together to form a larger map image
import ToiletMapModal from '../components/ToiletMapModal';
import { Icon } from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import 'react-leaflet-cluster/lib/assets/MarkerCluster.Default.css';

const NearestToiletsPage = () => {
  const [toiletResults, setToiletResults] = useState([]);
  const [userLatitude, setUserLatitude] = useState();
  const [userLongitude, setUserLongitude] = useState();

  // on render, fetches all the toilets in database
  const getToilets = async () => {
    try {
      const res = await fetch(`http://127.0.0.1:5001/toilets/getalltoilets`);
      const json = await res.json();
      console.log(json);
      setToiletResults(json);
    } catch (err) {
      alert(err.message);
    }
  };
  useEffect(() => {
    getToilets();
  }, []);

  useEffect(() => {}, [userLatitude]); // inserted in this just to ensure userLatitude and userLongitude states receive their values for leaflet map to render

  // on render, attempt to geolocate the user
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
  }, []);

  // formula to calculate distance between 2 points based on given coordinates
  // const distanceCal = (lat1, lon1, lat2, lon2, unit) => {
  //   let radlat1 = (Math.PI * lat1) / 180;
  //   let radlat2 = (Math.PI * lat2) / 180;
  //   let radlon1 = (Math.PI * lon1) / 180;
  //   let radlon2 = (Math.PI * lon2) / 180;
  //   let theta = lon1 - lon2;
  //   let radtheta = (Math.PI * theta) / 180;
  //   let dist =
  //     Math.sin(radlat1) * Math.sin(radlat2) +
  //     Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
  //   dist = Math.acos(dist);
  //   dist = (dist * 180) / Math.PI;
  //   dist = dist * 60 * 1.1515;
  //   if (unit == 'K') {
  //     dist = dist * 1.609344;
  //   }
  //   if (unit == 'N') {
  //     dist = dist * 0.8684;
  //   }
  //   return dist;
  // };

  const geoSuccess = (position) => {
    console.log(position);
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
    setUserLatitude(position.coords.latitude);
    setUserLongitude(position.coords.longitude);

    // let distance = distanceCal(
    //   latUser,
    //   longUser,
    //   latToilet,
    //   longToilet,
    //   longToilet,
    //   'k'
    // );

    // console.log(distance);
    // let distanceInMetres = Math.round(distance * 1000);
    // console.log(distanceInMetres);
  };

  const geoError = (error) => {
    //TODO add toast notification
    console.log(error);
  };

  // Custom icons
  const userLocationPin = new Icon({
    iconUrl: userLocationPinIcon,
    iconSize: [38, 38],
  });

  const unisexPin = new Icon({
    iconUrl: unisexIcon,
    iconSize: [38, 38],
  });

  const manPin = new Icon({
    iconUrl: manIcon,
    iconSize: [38, 38],
  });

  const femalePin = new Icon({
    iconUrl: girlIcon,
    iconSize: [38, 38],
  });

  return (
    <div className="mt-5 mb-5">
      {userLatitude && userLongitude ? (
        <MapContainer center={[userLatitude, userLongitude]} zoom={18}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={[userLatitude, userLongitude]}
            icon={userLocationPin}
          >
            <Popup>Here's you!</Popup>
          </Marker>
          <MarkerClusterGroup>
            {toiletResults.map((toilet) => {
              return (
                <Marker
                  position={[toilet.latitude, toilet.longitude]}
                  icon={
                    toilet.sex === 'male'
                      ? manPin
                      : toilet.sex === 'female'
                      ? femalePin
                      : unisexPin
                  }
                  key={toilet.id}
                >
                  <Popup>
                    <ToiletMapModal item={toilet} />
                  </Popup>
                </Marker>
              );
            })}
          </MarkerClusterGroup>
        </MapContainer>
      ) : (
        <p>Loading map...</p>
      )}
    </div>
  );
};

export default NearestToiletsPage;
