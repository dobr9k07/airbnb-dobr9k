"use client";

import React from "react";

import Link from "next/link";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import { Button } from "@/components/ui/button";

import "leaflet/dist/leaflet.css";

// Leaflet icon fix (на клієнті)
if (typeof window !== "undefined") {
  delete (Icon.Default.prototype as any)._getIconUrl;
  Icon.Default.mergeOptions({
    iconRetinaUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
    iconUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
  });
}

export interface ICity {
  id: number;
  label: string;
  latLng: [number, number];
}

interface Props {
  items: ICity[];
  className?: string;
}

export const MapLinks: React.FC<Props> = ({ items, className }) => {
  return (
    <MapContainer
      scrollWheelZoom={false}
      className="h-full w-full rounded-lg"
      center={[51.505, -0.09]}
      zoom={10}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {items.map((item) => (
        <Marker key={item.label} position={item.latLng}>
          <Popup>
            <div className="text-center">
              <h3 className="font-semibold mb-2">{item.label}</h3>
              <Link href={`/rooms/${item.id}`}>
                <Button size={"sm"}>Детальніше</Button>
              </Link>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};
