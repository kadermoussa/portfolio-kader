import { Inter, Poppins, Roboto_Mono } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
});

export const metadata = {
  title: 'Kader Moussa - Portfolio',
  description: 'Portfolio de Kader Moussa, Ingénieur en Génie Civil & BIM',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${inter.variable} ${poppins.variable} ${robotoMono.variable}`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
