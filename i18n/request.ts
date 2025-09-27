// import {getRequestConfig} from 'next-intl/server';
 
// export default getRequestConfig(async () => {
//   // Static for now, we'll change this later
//   const locale = 'it';
 
//   return {
//     locale,
//     messages: (await import(`../messages/${locale}.json`)).default
//   };
// });

import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async () => {
  // Qui non serve nulla, perché già carichi messaggi nel layout.tsx
  return {
    locale: 'it',
    messages: {}
  };
});
