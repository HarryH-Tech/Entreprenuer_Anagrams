import React, { useState, createContext, ReactNode } from 'react';

export const AppContext = createContext<AppContextType | null>(null);

const ContextProvider = ({ children }: any) => {
  const [entrepreneurName, setEntrepreneurName] = useState<string>('');

  const fetchEntrepreneur = (anagram: string) => {
    console.log('fetching');
  };

  return (
    <AppContext.Provider
      value={{ entrepreneurName, setEntrepreneurName, fetchEntrepreneur }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
