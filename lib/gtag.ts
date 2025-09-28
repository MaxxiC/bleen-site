// File: lib/gtag.ts
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID!; // <--- metti il tuo ID GA4 qui
//console.log("GA Tracking ID:", process.env.NEXT_PUBLIC_GA_ID);

// Dichiara il tipo accettato da gtag (puoi anche ampliarlo se vuoi più eventi)
type GTagFunction = (...args: unknown[]) => void

declare global {
  interface Window {
    gtag: GTagFunction
  }
}

export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

export const trackButtonClick = (sportName: string, gender: 'm' | 'f') => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'button_click', {
        event_category: 'sport_classifica',
        event_label: `${sportName} ${gender}`,
        value: 1, // puoi usare questo per tracciare quantità o altre informazioni
      });
      console.log(`Event tracked: ${sportName} ${gender}`);
    }
  };