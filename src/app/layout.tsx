export const metadata = {
  title: "Tobedon",
  description: "track What needs to be done",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
