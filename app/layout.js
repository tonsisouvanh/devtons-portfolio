import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Dev Tons | Fullstack Developer",
  description:
    "Fullstack Developer with a passion for building web applications.",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className="font-poppins">
        <Navbar />
        <main className="">{children}</main>
      </body>
    </html>
  );
}
