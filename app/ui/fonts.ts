// this file to keep the fonts that will be used throughout your application

import { Inter, Lusitana } from 'next/font/google';  // Inter will be your primary font
 
export const inter = Inter({ subsets: ['latin'] });
 
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});