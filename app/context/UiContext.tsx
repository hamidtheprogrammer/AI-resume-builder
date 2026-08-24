"use client";

import { createContext, ReactNode, SetStateAction, useState } from "react";
import React from "react";

interface IUIcontext {
  showSignInModal: Boolean;
  setShowSignInModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultUIContext = {
  showSignInModal: false,
  setShowSignInModal:()=>{}
};

export const UIcontext = createContext<IUIcontext>(defaultUIContext);

const UIContextProvider = ({ children }: { children: ReactNode }) => {
  const [showSignInModal, setShowSignInModal] = useState(false);
  return (
    <UIcontext.Provider value={{ showSignInModal, setShowSignInModal }}>
      {children}
    </UIcontext.Provider>
  );
};
