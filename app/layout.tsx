import './globals.css';

export const metadata = {
  title: 'Netflix Clone',
  description: 'Yet another Netflix Clone',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="antialiased select-none">
      <body>{children}</body>
    </html>
  );
}
