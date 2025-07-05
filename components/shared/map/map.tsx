"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { cardItem } from "@/lib/item/cardItem";
import dynamic from "next/dynamic";
import React from "react";
import { ICity } from "./map-links";

// import type { MapLinks } from "./map-links";

interface Props {
  className?: string;
}

const LazyMap = dynamic(
  () => import("./map-links").then((mod) => mod.MapLinks),
  { ssr: false, loading: () => <Skeleton className="w-full h-full" /> }
);

export const Map: React.FC<Props> = ({ className }) => {
  const items = cardItem.map((item) => ({
    id: item.id,
    label: item.location,
    latLng: [item.latitude, item.longitude],
  })) as ICity[];

  return <LazyMap items={items} />;
};
