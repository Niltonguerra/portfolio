import LightSpot from './components/organisms/LightSpot/LightSpot';
import './globals.css';
import { Inter, Montserrat } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });

export const metadata = {
  title: 'Nilton Dionisio Guerra',
  description: 'portfólio',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" className={`${inter.variable} ${montserrat.variable}`}>
      <body>
        <LightSpot />
        {children}
      </body>
    </html>
  );
}