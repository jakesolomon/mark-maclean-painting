import { ReactNode } from "react";
import UtilityBar from "./UtilityBar";
import Footer from "./Footer";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <UtilityBar />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
);

export default Layout;
