import "./globals.css";

export const metadata = {
  title: "Inventory Management System",
  description: "A simple sample project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
