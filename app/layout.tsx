// RootLayout-Component  wrap the application's content with a consistent structure


// importing the global.css file
import '@/app/ui/global.css';  //The @ symbol is a shorthand alias for the src directory
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // The children prop acts as a placeholder for all the components and elements nested inside the RootLayout component.
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
