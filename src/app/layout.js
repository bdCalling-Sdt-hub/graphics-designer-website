import "./globals.css";
import localFont from "next/font/local";
import Providers from "@/lib/Providers";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";

// Custom font
const satoshi = localFont({
  src: "../../public/fonts/Satoshi-Variable.woff2",
  display: "block",
  variable: "--font-satoshi",
  weight: "200 900",
});

export const metadata = {
  title: {
    template: "%s | Grafismo Digital",
    default: "Grafismo Digital — Creative Design Experience",
  },
  description:
    "Grafismo Digital — Creative Design Experience. Grafismo digital is a platform myself Tanvir, a creative Product Designer helps businesses to solve their problems with my design for 2 years.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${satoshi.className} ${satoshi.variable}`}>
      <head>
        <link
          rel="shortcut icon"
          href="/images/favicon.svg"
          type="image/x-icon"
        />
      </head>
      <body className="antialiased">
        <Providers>
          <Navbar />

          <main className="min-h-screen">{children}</main>

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
