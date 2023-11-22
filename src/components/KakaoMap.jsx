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
      style={{ width: "100%", height: "450px", position: "relative" }}
    >
      <MapMarker position={{ lat: 37.565265, lng: 126.980996 }}>
        <p className="text-xs font-bold text-gray-700 p-2 w-44">
          RealHotel
          <br />
          서울특별시 중구 을지로 30
        </p>
      </MapMarker>
    </Map>
  );
}

function useKakaoLoader() {
  useKakaoLoaderOrigin({
    appkey: "c1ef34164e409047d657359039eea3dc",
    libraries: ["clusterer", "drawing", "services"],
  });
}
