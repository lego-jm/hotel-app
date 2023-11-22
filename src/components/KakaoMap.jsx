import React from "react";
import {
  Map,
  MapMarker,
  useKakaoLoader as useKakaoLoaderOrigin,
} from "react-kakao-maps-sdk";

export default function KakaoMap() {
  useKakaoLoader();
  return (
    <Map
      center={{ lat: 37.565265, lng: 126.980896 }}
      style={{ width: "100%", height: "450px" }}
    >
      <MapMarker position={{ lat: 37.565265, lng: 126.980996 }}></MapMarker>
    </Map>
  );
}

function useKakaoLoader() {
  useKakaoLoaderOrigin({
    appkey: "c1ef34164e409047d657359039eea3dc",
    libraries: ["clusterer", "drawing", "services"],
  });
}
