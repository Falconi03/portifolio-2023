'use client'
import { useState, ReactNode, createContext } from "react";

interface ContextProps {
  children: ReactNode;
}

interface Sidebar {
  showSidebar: boolean;
  setShowSidebar: (newState: boolean) => void;
}

const initialState = {
  showSidebar: false,
  setShowSidebar: () => {},
};

export const SidebarContext = createContext<Sidebar>(initialState);

export const SidebarContextProvider = ({ children }: ContextProps) => {
  const [showSidebar, setShowSidebar] = useState(initialState.showSidebar);
  return (
    <SidebarContext.Provider
      value={{
        showSidebar,
        setShowSidebar,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
