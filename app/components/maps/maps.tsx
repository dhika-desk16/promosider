// components/maps/Maps.tsx
"use client";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function Maps() {
  const [isClient, setIsClient] = useState(false);
  const [location, setLocation] = useState<[number, number] | null>(null); // Menyimpan lokasi pengguna

  useEffect(() => {
    setIsClient(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation([position.coords.latitude, position.coords.longitude]);
        },
        (error) => {
          console.error(error);
        },
      );
    }
  }, []);

  if (!isClient || !location) {
    return <div>Loading map...</div>;
  }

  return (
    <MapContainer
      center={location}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={location}>
        <Popup>
          You are here. <br /> This is your current location.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
