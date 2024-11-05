import "@/app/_styles/globals.css";
// Next.js unique way of importing fonts
import { Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";
import ReservationProvider from "./_components/ReservationContext";
// What we import is actually a function, call it and save it to a variable.
const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  // title: "The Wild Oasis",
  title: {
    // %s gets replaced by whatever we indicate on individual pages
    template: "%s | The Wild Oasis",
    default: "Welcome | The Wild Oasis",
  },
  // For SEO
  description:
    "Luxorious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} antialiased min-h-screen bg-primary-900 text-primary-100 flex flex-col`}
      >
        <Header />
        <div className="grid flex-1 px-8 py-12">
          <main className="w-full mx-auto max-w-7xl">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
