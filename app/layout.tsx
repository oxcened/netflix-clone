import './globals.css';

export const metadata = {
  title: 'FlixClone',
  description: 'Not your usual Netflix clone',
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
