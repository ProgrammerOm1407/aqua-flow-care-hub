import React, { createContext, useState, useCallback } from 'react';

export type ContactFormPrefill = Partial<{
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}>;

interface ContactFormContextType {
  prefill: ContactFormPrefill | null;
  setPrefill: (data: ContactFormPrefill) => void;
  clearPrefill: () => void;
}

export const ContactFormContext = createContext<ContactFormContextType>({
  prefill: null,
  setPrefill: () => {},
  clearPrefill: () => {},
});

export const ContactFormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [prefill, setPrefillState] = useState<ContactFormPrefill | null>(null);

  const setPrefill = useCallback((data: ContactFormPrefill) => {
    setPrefillState(data);
  }, []);

  const clearPrefill = useCallback(() => {
    setPrefillState(null);
  }, []);

  return (
    <ContactFormContext.Provider value={{ prefill, setPrefill, clearPrefill }}>
      {children}
    </ContactFormContext.Provider>
  );
}; 