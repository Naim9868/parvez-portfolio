import "./globals.css";
import Head from "next/head";

export const metadata = {
  title: "Pervez Hasan - AI Engineer, Author, YouTuber",
  description: "Portfolio of Pervez Hasan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <Head>
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </Head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
