import { createContext, useState } from "react";

export const initialValues = {
  name: "",
  phone: "",
  email: "",
  title: "",
  content: "",
};

export const ContactContext = createContext(null);

export const ContactProvider = ({ children }) => {
  const [contact, setContact] = useState(initialValues);

  return (
    <ContactContext.Provider value={{ contact, setContact }}>
      {children}
    </ContactContext.Provider>
  );
};
