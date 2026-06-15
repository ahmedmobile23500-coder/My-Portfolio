import "./globals.css";
import WhatsappButton from "./components/WhatsappButton/page";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="
        bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950
        text-white
        antialiased
        scroll-smooth
        min-h-screen
        "
      >
        {children}

        <WhatsappButton />
      </body>
    </html>
  );
}