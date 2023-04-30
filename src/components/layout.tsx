import { ReactNode } from "react";
import Footer from "./footer";
import ScrollProgress from "./scrollprogress";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <ScrollProgress />
      <main>{children}</main>
      <Footer />
    </>
  );
}
