import "./globals.css";

export const metadata = {
  title: 'Nilton Dionisio Guerra',
  description: 'portfólio',
  icons: {
    icon: '/favicon.ico',
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" suppressHydrationWarning={true} data-lt-installed="true">
      {children}
    </html>
  );
}