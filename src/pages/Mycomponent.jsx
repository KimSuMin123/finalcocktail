import React from 'react';
import { MapContainer, TileLayer, WMSTileLayer } from 'react-leaflet';

const Mycomponent = () => {
  return (
    <div>
      <h2>WMS Example</h2>
      <MapContainer center={[37.5665, 126.9780]} zoom={5} style={{ height: '200px' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <WMSTileLayer
          url="http://safemap.go.kr/openApiService/wms/getLayerData.do"
          layers="layer_name"
          format="image/png"
          transparent={true}
        />
      </MapContainer>
    </div>
  );
};

export default Mycomponent
