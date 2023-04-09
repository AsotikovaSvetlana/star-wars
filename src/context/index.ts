import React, { createContext } from "react";
import { StaticImageData } from "next/image";
import DefaultPoster from "@/src/assets/images/home/default.jpeg";

type ContextType = {
  poster: string | StaticImageData;
  setPoster: (img: string | StaticImageData) => void;
};

export const initialState: ContextType = {
  poster: DefaultPoster,
  setPoster: (img) => (initialState.poster = img),
};

export const AppContext = createContext(initialState);
