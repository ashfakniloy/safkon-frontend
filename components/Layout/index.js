import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children, title, description, keywords }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      <div>
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
}

Layout.defaultProps = {
  title: "Safkon industries ltd",
  description: "safkon",
  keywords: "safkon",
};

export default Layout;
