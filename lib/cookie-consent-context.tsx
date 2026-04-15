'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

const STORAGE_KEY = 'sdg_cookie_consent';
type ConsentState = 'accepted' | 'essential';

interface CookieConsentContextValue {
  bannerVisible: boolean;
  dismiss: (value: ConsentState) => void;
}

const CookieConsentContext = createContext<CookieConsentContextValue>({
  bannerVisible: false,
  dismiss: () => {},
});

export const CookieConsentProvider = ({ children }: { children: ReactNode }) => {
  const [bannerVisible, setBannerVisible] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) setBannerVisible(true);
    } catch {
      setBannerVisible(true);
    }
  }, []);

  const dismiss = (value: ConsentState) => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch { /* ignore */ }
    setBannerVisible(false);
  };

  return (
    <CookieConsentContext.Provider value={{ bannerVisible, dismiss }}>
      {children}
    </CookieConsentContext.Provider>
  );
};

export const useCookieConsent = () => useContext(CookieConsentContext);
