import "./globals.css";
import type { Metadata } from "next";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Hello World!",
  description: "Make a move, Make a difference.",
  name: "google-site-verification",
  content: "yWJFeFRMKfPWyKghAPGMn_5g0HoTwQYTGcTK8S22oSo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
