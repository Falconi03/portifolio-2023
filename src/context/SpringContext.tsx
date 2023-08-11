"use client";

import { useState, useEffect, createContext, ReactNode } from "react";

interface ContextProps {
  children: ReactNode;
}

interface Pointer {
  pointer: string;
  setPointer: (newState: string) => void;
}

const initialState = {
  pointer: "",
  setPointer: () => {},
};

export const PointerContext = createContext<Pointer>(initialState);

export const PointerContextProvider = ({ children }: ContextProps) => {
  const [pointer, setPointer] = useState(initialState.pointer);

  return (
    <PointerContext.Provider
      value={{
        pointer,
        setPointer,
      }}
    >
      {children}
    </PointerContext.Provider>
  );
};
