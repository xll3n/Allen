import "./globals.css";
import Layout from "@/components/Layout";

export const metadata = {
  title: "AniGold",
  description: "The best anime streaming app ever built.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-800 text-white">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
