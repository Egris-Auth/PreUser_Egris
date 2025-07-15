import localFont from 'next/font/local'
import "./globals.css";
import { ToastProvider } from './context/ToastContext';


const OutfitRegular = localFont({
  src: './fonts/Outfit-Regular.ttf',
});

export const OutfitBlack = localFont({
  src: './fonts/Outfit-Black.ttf',
});
export const OutfitBold = localFont({
  src: './fonts/Outfit-Bold.ttf',
});
export const OutfitExtraBold = localFont({
  src: './fonts/Outfit-ExtraBold.ttf',
});
export const OutfitLight = localFont({
  src: './fonts/Outfit-Light.ttf',
});
export const OutfitExtraLight = localFont({
  src: './fonts/Outfit-ExtraLight.ttf',
});
export const OutfitMedium = localFont({
  src: './fonts/Outfit-Medium.ttf',
});

export const metadata = {
  title: "Egris auth",
  description: "Secure fast authentication",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={OutfitRegular.className}>
        <ToastProvider>
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}
