import React, { createContext, useContext, useState } from "react";

interface ContactSalesContextType {
  count: number;
  increment: () => void;
}

const ContactSalesContext = createContext<ContactSalesContextType | undefined>(undefined);

export const ContactSalesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((c) => c + 1);

  return (
    <ContactSalesContext.Provider value={{ count, increment }}>
      {children}
    </ContactSalesContext.Provider>
  );
};

export const useContactSales = () => {
  const context = useContext(ContactSalesContext);
  if (!context) {
    throw new Error("useContactSales must be used within ContactSalesProvider");
  }
  return context;
};
