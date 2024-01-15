import { FC, ReactNode, lazy } from "react";
import { Toaster } from "@ui/sonner";

const Navbar = lazy(() => import("@/components/common/Navbar"));
const Footer = lazy(() => import("@/components/common/Footer"));


interface ILayout {
  children: ReactNode;
}

const Layout: FC<ILayout> = (props) => {
  const { children } = props;

  return <>
    <Navbar />
    <main className="min-h-[calc(100dvh-5rem)] container p-4 md:p-8">
      {children}
      <Toaster position="bottom-center" />
    </main>
    <Footer />
  </>;
}

export default Layout