import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import { Fragment } from "react";

const MainLayout = ({children}) => {
  return (
    <Fragment>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </Fragment>
  );
}

export default MainLayout;